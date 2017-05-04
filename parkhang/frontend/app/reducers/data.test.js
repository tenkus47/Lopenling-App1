import { dataReducer } from 'reducers';
import Text from 'lib/Text'
import Source from 'lib/Source'
import Witness from 'lib/Witness'
import Annotation, { TemporaryAnnotation } from 'lib/Annotation'
import User from 'lib/User'
import dataReducers, * as data from 'reducers/data'
// import dataReducers, { initialDataState, dataFromAnnotation } from 'reducers/data'
import * as actions from 'actions';

const source1 = new Source(1, "Derge");
const text = new Text(1, "དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ");
const baseWitness = new Witness(1, text, source1, "Test witness", true);
const annotation = new Annotation(1, baseWitness, 0,  27, "༄༅༅", baseWitness);
const user = new User(1, "Test User");

describe('Applying and removing reducer', () => {

    const applyAction = actions.appliedAnnotation(annotation);

    let state = {...data.initialDataState};
    let witnessActiveAnnotations = {
        [baseWitness.id]: [annotation.uniqueId]
    };
    let expectedState = {
        ...state,
        witnessActiveAnnotationsById: witnessActiveAnnotations,
    };

    test('Applying annotation', () => {
        expect(
            dataReducers[applyAction.type](state, applyAction)
        ).toEqual(expectedState);

        expect(
            dataReducers[applyAction.type](state, applyAction)
        ).not.toBe(state);
    });

    const removeAction = actions.removedAppliedAnnotation(annotation);

    test('Removing annotation', () => {
        const state = dataReducers[applyAction.type]({...data.initialDataState}, applyAction);
        const witnessActiveAnnotations = {
            [baseWitness.id]: []
        };
        const expectedState = {
            ...state,
            witnessActiveAnnotationsById: witnessActiveAnnotations,
        };

        expect(
            dataReducers[removeAction.type](state, removeAction)
        ).toEqual(expectedState);

        expect(
            dataReducers[removeAction.type](state, removeAction)
        ).not.toBe(state);
    });
});

describe('Processing loaded data', () => {

    test('loadedAnnotations', () => {
        let state = {
            ...data.initialDataState
        };

        const annotationsData = [
            {
                "id": 498,
                "type": 'V',
                "witness": 1,
                "start": 0,
                "length": 67,
                "content": "",
                "creator_witness": 152,
                "creator_user": null,
                "is_deleted": false,
                "unique_id": "1e74ae00-7b15-4b30-95d6-2424cfa93f57",
                "is_saved": true
            }
        ];

        let expectedState = {
            ...state,
            loadedAnnotations: true,
            loadingAnnotations: true,
            witnessAnnotationsById: {
                1: {
                    "1e74ae00-7b15-4b30-95d6-2424cfa93f57": {
                        "id": 498,
                        "type": 'V',
                        "witness": 1,
                        "start": 0,
                        "length": 67,
                        "content": "",
                        "creator_witness": 152,
                        "creator_user": null,
                        "is_deleted": false,
                        "unique_id": "1e74ae00-7b15-4b30-95d6-2424cfa93f57",
                        "is_saved": true
                    }
                }
            }
        };

        const action = actions.loadedWitnessAnnotations(baseWitness, annotationsData);

        expect(
            dataReducers[action.type](state, action)
        ).toEqual(expectedState);

        state = {
            ...state,
            loadedAppliedAnnotations: true,
        };

        expectedState = {
            ...expectedState,
            loadedAppliedAnnotations: true,
            loadingAnnotations: false
        };

        expect(
            dataReducers[action.type](state, action)
        ).toEqual(expectedState);
    });
});

describe('CUD annotation', () => {

    const newAnnotation = new TemporaryAnnotation(null, baseWitness, 5, 7, "replacement", user);
    const createAction = actions.createdAnnotation(newAnnotation);

    let state = {...data.initialDataState};

    test('Create annotation', () => {
        let annotationData = data.dataFromAnnotation(newAnnotation);
        annotationData.is_saved = true;
        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {
                    [newAnnotation.uniqueId]: annotationData
                }
            }
        };
        expect(
            dataReducers[createAction.type](state, createAction)
        ).toEqual(expectedState);
    });

    const updatedAnnotation = new TemporaryAnnotation(newAnnotation, baseWitness, 5, 7, "replaced", user, newAnnotation.type, newAnnotation.uniqueId);
    updatedAnnotation.save();
    const updatedAction = actions.updatedAnnotation(updatedAnnotation);

    test('Updated unsaved annotation', () => {
        state = dataReducers[createAction.type](state, createAction);

        let annotationData = data.dataFromAnnotation(updatedAnnotation);
        annotationData.is_saved = true;
        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {
                    [updatedAnnotation.uniqueId]: annotationData
                }
            }
        };
        expect(
            dataReducers[updatedAction.type](state, updatedAction)
        ).toEqual(expectedState);
    });


    const savedAnnotation = new Annotation(2, baseWitness, 5, 7, "replaced", user, newAnnotation.type, newAnnotation.uniqueId);
    savedAnnotation.save();
    const savedAction = actions.savedAnnotation(savedAnnotation);

    test('Saved annotation', () => {
        state = dataReducers[updatedAction.type](state, updatedAction);

        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {
                    [savedAnnotation.uniqueId]: data.dataFromAnnotation(savedAnnotation)
                }
            }
        };

        expect(
            dataReducers[savedAction.type](state, savedAction)
        ).toEqual(expectedState);

    });

    const updatedSavedAnnotation = new TemporaryAnnotation(savedAnnotation, baseWitness, 5, 7, "update", user, savedAnnotation.type, savedAnnotation.uniqueId);
    updatedSavedAnnotation.isSaved = savedAnnotation.isSaved;
    const updateSavedAction = actions.updatedAnnotation(updatedSavedAnnotation);

    test('Updated saved annotation', () => {
        state = dataReducers[savedAction.type](state, savedAction);
        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {
                    [savedAnnotation.uniqueId]: data.dataFromAnnotation(updatedSavedAnnotation)
                }
            }
        };

        expect(
            dataReducers[updateSavedAction.type](state, updateSavedAction)
        ).toEqual(expectedState);
    });

    const deletedAnnotation = savedAnnotation;
    const deletedAction = actions.deletedAnnotation(deletedAnnotation);

    test('Deleted annotation', () => {
        state = dataReducers[updateSavedAction.type](state, updateSavedAction)
        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {}
            }
        };

        expect(
            dataReducers[deletedAction.type](state, deletedAction)
        ).toEqual(expectedState);
    });

});