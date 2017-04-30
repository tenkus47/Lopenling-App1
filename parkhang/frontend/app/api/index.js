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
    const url = '/api/texts/'+witness.text+'/witnesses/'+witness.id+'/annotations/';
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

}