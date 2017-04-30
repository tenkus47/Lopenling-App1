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
        [baseWitness.id]: [annotation.id]
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

describe('CUD annotation', () => {

    const newAnnotation = new TemporaryAnnotation(null, baseWitness, 5, 7, "replacement", user);
    const createAction = actions.createdAnnotation(newAnnotation);

    let state = {...data.initialDataState};

    test('Create annotation', () => {
        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {
                    [newAnnotation.id]: data.dataFromAnnotation(newAnnotation)
                }
            }
        };
        expect(
            dataReducers[createAction.type](state, createAction)
        ).toEqual(expectedState);
    });

    const updatedUnsavedAnnotation = new TemporaryAnnotation(newAnnotation, baseWitness, 5, 7, "replaced", user);
    const updatedAction = actions.updatedAnnotation(updatedUnsavedAnnotation);

    test('Updated unsaved annotation', () => {
        state = dataReducers[createAction.type](state, createAction);
        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {
                    [updatedUnsavedAnnotation.id]: data.dataFromAnnotation(updatedUnsavedAnnotation)
                }
            }
        };
        expect(
            dataReducers[updatedAction.type](state, updatedAction)
        ).toEqual(expectedState);
    });


    const savedAnnotation = new Annotation(2, baseWitness, 5, 7, "replaced", user);
    const savedAction = actions.savedAnnotation(savedAnnotation);

    test('Saved annotation', () => {
        state = dataReducers[updatedAction.type](state, updatedAction);

        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {
                    [savedAnnotation.id]: data.dataFromAnnotation(savedAnnotation)
                }
            }
        };

        expect(
            dataReducers[savedAction.type](state, savedAction)
        ).toEqual(expectedState);

    });

    const updatedSavedAnnotation = new TemporaryAnnotation(savedAnnotation, baseWitness, 5, 7, "update", user);
    const updateSavedAction = actions.updatedAnnotation(updatedSavedAnnotation);

    test('Updated saved annotation', () => {
        state = dataReducers[savedAction.type](state, savedAction);
        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {
                    [savedAnnotation.id]: data.dataFromAnnotation(updatedSavedAnnotation)
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