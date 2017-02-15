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
    const url = '/api/texts/'+String(witness.text)+'/witnesses/'+witness.id+'/annotations/';
    return getData(url);
}