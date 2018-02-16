// @flow
import axios from "axios";
import Annotation from "lib/Annotation";
import Witness from "lib/Witness";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const GET = "get";
const POST = "post";
const PUT = "put";
const DELETE = "delete";

type ReqMethod = "get" | "post" | "put" | "delete";

function request(method: ReqMethod, url, data: any = null): Promise<*> {
    let req = null;
    switch (method) {
        case POST:
            req = axios.post;
            break;
        case PUT:
            req = axios.put;
            break;
        case DELETE:
            req = axios.delete;
            break;
        case GET:
        default:
            req = axios.get;
            break;
    }

    const promiseReq = req;
    return new Promise((resolve, reject) => {
        promiseReq(url, data)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.dir(error);
                reject(error);
            });
    });
}

// GET DATA

export type SourceData = {
    id: number,
    name: string,
    is_base: boolean,
    is_working: boolean
};
export function fetchSources(): Promise<SourceData[]> {
    const url = "/api/sources/";
    return request(GET, url);
}

export type TextData = {
    id: number,
    name: string
};
export function fetchTexts(): Promise<TextData[]> {
    const url = "/api/texts/";
    return request(GET, url);
}

export type WitnessData = {
    id: number,
    content: string | null,
    is_base: boolean,
    is_working: boolean,
    revision: number,
    source: number,
    text: number
};
export function fetchTextWitnesses(text: TextData): Promise<WitnessData[]> {
    const url = "/api/texts/" + String(text.id) + "/witnesses/";
    return request(GET, url);
}

type AnnotationUniqueId = string;

export type AnnotationData = {
    id: number | null,
    content: string,
    creator_user: number | null,
    creator_witness: number,
    is_deleted: boolean,
    length: number,
    original: AnnotationUniqueId | null,
    start: number,
    type: string,
    unique_id: AnnotationUniqueId,
    witness: number,
    is_saved?: boolean,
    name?: string
};
export function fetchWitnessAnnotations(
    witness: WitnessData
): Promise<AnnotationData[]> {
    const url =
        "/api/texts/" +
        witness.text +
        "/witnesses/" +
        witness.id +
        "/annotations/";
    return request(GET, url);
}

// APPLYING ANNOTATIONS

function getApplyAnnotationUrl(
    witnessData: WitnessData,
    annotationUniqueId: AnnotationUniqueId | null = null
): string {
    let url =
        "/api/texts/" +
        witnessData.text +
        "/witnesses/" +
        witnessData.id +
        "/applied_annotations/";
    if (annotationUniqueId) {
        url += annotationUniqueId;
    }
    return url;
}

export function fetchAppliedUserAnnotations(
    witnessData: WitnessData
): Promise<AnnotationData[]> {
    const url = getApplyAnnotationUrl(witnessData);
    return request(GET, url);
}

export function applyAnnotation(
    annotationId: AnnotationUniqueId,
    witnessData: WitnessData
) {
    const url = getApplyAnnotationUrl(witnessData);
    let data = {
        annotation_unique_id: annotationId
    };
    return request(POST, url, data);
}

export function removeAppliedAnnotation(
    annotationId: AnnotationUniqueId,
    witness: WitnessData
) {
    const url = getApplyAnnotationUrl(witness, annotationId);
    return request(DELETE, url);
}

// CREATING ANNOTATIONS

export function dataFromAnnotation(annotation: Annotation): AnnotationData {
    const creatorWitness = annotation.creatorWitness.id;
    const creatorUser = annotation.creatorUser
        ? annotation.creatorUser.id
        : null;

    return {
        id: annotation.id,
        unique_id: annotation.uniqueId,
        witness: annotation.witness.id,
        start: annotation.start,
        length: annotation.length,
        content: annotation.content,
        creator_witness: creatorWitness,
        creator_user: creatorUser,
        type: annotation.type,
        original: annotation.basedOn ? annotation.basedOn.uniqueId : null,
        is_deleted: false,
        is_saved: false
    };
}

function getAnnotationUrl(
    witness: Witness,
    annotation: Annotation | null = null
): string {
    let url =
        "/api/texts/" +
        witness.text.id +
        "/witnesses/" +
        witness.id +
        "/annotations/";
    if (annotation) {
        url += annotation.uniqueId;
    }
    return url;
}

export function createAnnotation(annotation: Annotation) {
    const url = getAnnotationUrl(annotation.witness);
    let data = dataFromAnnotation(annotation);
    delete data.id;
    return request(POST, url, data);
}

export function updateAnnotation(annotation: Annotation) {
    const url = getAnnotationUrl(annotation.witness, annotation);
    const data = dataFromAnnotation(annotation);
    return request(PUT, url, data);
}

export function deleteAnnotation(annotation: Annotation) {
    const url = getAnnotationUrl(annotation.witness, annotation);
    return request(DELETE, url);
}
