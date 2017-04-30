import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const DELETE = 'delete';

function request(method, url, data=null) {
    let req = null;
    switch(method) {
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

    return new Promise((resolve, reject) => {
        req(url, data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.dir(error);
                reject(error);
            })
    });
}

// GET DATA

export function fetchSources() {
    const url = '/api/sources/';
    return request(GET, url);
}

export function fetchTexts() {
    const url = '/api/texts/';
    return request(GET, url);
}

export function fetchTextWitnesses(text) {
    const url = '/api/texts/'+String(text.id)+'/witnesses/'
    return request(GET, url);
}

export function fetchWitnessAnnotations(witness) {
    const url = '/api/texts/'+witness.text.id+'/witnesses/'+witness.id+'/annotations/';
    return request(GET, url);
}

// APPLYING ANNOTATIONS

function getApplyAnnotationUrl(witness, annotationId=null) {
    let url = '/api/texts/'+witness.text.id+'/witnesses/'+witness.id+'/applied_annotations/';
    if (annotationId) {
        url += annotationId;
    }
    return url;
}

export function fetchAppliedUserAnnotations(witness) {
    const url = getApplyAnnotationUrl(witness);
    return request(GET, url);
}

export function applyAnnotation(annotation) {
    const url = getApplyAnnotationUrl(annotation.witness);

    return request(POST, url, {
        annotation_id: annotation.id
    });
}

export function removeAppliedAnnotation(annotation) {
    const url = getApplyAnnotationUrl(annotation.witness, annotation.id);
    return request(DELETE, url);
}

// CREATING ANNOTATIONS

export function dataFromAnnotation(annotation) {
    const creatorWitness = (annotation.userCreated) ? null : annotation.creator;
    const creatorUser = (annotation.userCreated) ? annotation.creator : null;

    return {
        id: annotation.id,
        witness: annotation.witness.id,
        start: annotation.start,
        length: annotation.length,
        content: annotation.content,
        creator_witness: creatorWitness,
        creator_user: creatorUser
    }
}

function getAnnotationUrl(witness, annotation=null) {
    let url = '/api/texts/'+witness.text.id+'/witnesses/'+witness.id+'/annotations/';
    if (annotation) {
        url += annotation.id;
    }
    return url;
}

export function createAnnotation(annotation) {
    const url = getAnnotationUrl(annotation.witness);
    let data = dataFromAnnotation(annotation);
    delete data.id;
    return request(POST, url, data);
}

export function updateAnnotation(annotation) {
    const url = getAnnotationUrl(annotation.witness, annotation);
    const data = dataFromAnnotation(annotation);
    return request(PUT, url, data);
}

export function deleteAnnotation(annotation) {
    const url = getAnnotationUrl(annotation.witness, annotation);
    return request(DELETE, url);
}