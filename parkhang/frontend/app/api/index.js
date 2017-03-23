import axios from 'axios'

function getData(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(function(response){
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            })
    });
}

export function fetchSources() {
    const url = '/api/sources/';
    return getData(url);
}

export function fetchTexts() {
    const url = '/api/texts/';
    return getData(url);
}

export function fetchTextWitnesses(text) {
    const url = '/api/texts/'+String(text.id)+'/witnesses/'
    return getData(url);
}

export function fetchWitnessAnnotations(witness) {
    const url = '/api/texts/'+witness.text+'/witnesses/'+witness.id+'/annotations/';
    return getData(url);
}

function getApplyAnnotationUrl(witness) {
    console.log('getApplyAnnotationUrl: %o', witness);
    return '/api/texts/'+witness.text.id+'/witnesses/'+witness.id+'/applied_annotations/';
}

export function fetchAppliedUserAnnotations(witness) {
    const url = getApplyAnnotationUrl(witness);
    return getData(url);
}

export function applyAnnotation(annotation) {
    const url = getApplyAnnotationUrl(annotation.witness);

    return new Promise((resolve, reject) => {
        axios.post(url, {
                annotation_id: annotation.id
            })
            .then(function(response){
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            })
    });
}

export function removeAnnotation(annotation) {
    const url = getApplyAnnotationUrl(annotation.witness);

    return new Promise((resolve, reject) => {
        axios.delete(url, {
                annotation_id: annotation.id
            })
            .then(function(response){
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            })
    });
}