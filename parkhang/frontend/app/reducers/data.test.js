import { dataReducer } from 'reducers';
import Text from 'lib/Text'
import Source from 'lib/Source'
import Witness from 'lib/Witness'
import Annotation, { TemporaryAnnotation, ANNOTATION_TYPES } from 'lib/Annotation'
import User from 'lib/User'
import dataReducers, * as data from 'reducers/data'
// import dataReducers, { initialDataState, dataFromAnnotation } from 'reducers/data'
import * as actions from 'actions';

const source1 = new Source(1, "Derge", true);
const source2 = new Source(2, "Narthang");
const text = new Text(1, "དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ");
const baseWitness = new Witness(1, text, source1, "Test witness", true);
const otherWitness = new Witness(2, text, source2, "", false);
const annotation = new Annotation(1, baseWitness, 0, 27, "༄༅༅", ANNOTATION_TYPES.variant, baseWitness);
const user = new User(1, "");

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

    const newAnnotation = new TemporaryAnnotation(null, baseWitness, 5, 7, "replacement", ANNOTATION_TYPES.variant, null, user);
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

    const updatedAnnotation = new TemporaryAnnotation(newAnnotation, baseWitness, 5, 7, "replaced", newAnnotation.type, null, user, newAnnotation.uniqueId);
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


    const savedAnnotation = new Annotation(2, baseWitness, 5, 7, "replaced", newAnnotation.type, null, user, newAnnotation.uniqueId);
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

    const updatedSavedAnnotation = new TemporaryAnnotation(savedAnnotation, baseWitness, 5, 7, "update", savedAnnotation.type, null, user, savedAnnotation.uniqueId);
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

describe('Data selectors', () => {

    let state = data.initialDataState;
    state = {
        ...state,
        textsById: {
            1: {
                id: text.id,
                name: text.name,
            }
        },
        sourcesById: {
            [source1.id]: {
                id: source1.id,
                name: source1.name,
                is_base: source1.isBase
            },
            [source2.id]: {
                id: source2.id,
                name: source2.name,
                is_base: source2.isBase
            }
        },
        witnessesById: {
            [baseWitness.id]: {
                id: baseWitness.id,
                text: baseWitness.text.id,
                source: baseWitness.source.id,
                is_base: true,
                revision: 1,
                content: baseWitness.content
            },
            [otherWitness.id]: {
                id: otherWitness.id,
                text: otherWitness.text.id,
                source: otherWitness.source.id,
                is_base: false,
                revision: 1,
                content: otherWitness.content
            }
        },
        witnessAnnotationsById: {
            1: {
                "52bab9be-a395-4c9c-b264-1d03a091cc4b": {
                    id: 488,
                    unique_id: "52bab9be-a395-4c9c-b264-1d03a091cc4b",
                    type: "V",
                    witness: 1,
                    start: 0,
                    length: 29,
                    content: "",
                    creator_witness: 2,
                    creator_user: null,
                    original: null,
                    is_deleted: false,
                    is_saved: true
                },
                "527713e8-b191-4b74-9f34-cd9f8d0e4318": {
                    id: 489,
                    unique_id: "527713e8-b191-4b74-9f34-cd9f8d0e4318",
                    type: "V",
                    witness: 1,
                    start: 0,
                    length: 29,
                    content: "Test",
                    creator_witness: 2,
                    creator_user: 1,
                    original: "52bab9be-a395-4c9c-b264-1d03a091cc4b",
                    is_deleted: false,
                    is_saved: true
                }
            }
        }
    };

    const expectedGetAnnotation = new Annotation(488, baseWitness, 0, 29, "", "V", otherWitness, null, "52bab9be-a395-4c9c-b264-1d03a091cc4b");

    test('getAnnotation', () => {

        expectedGetAnnotation.save();

        expect(
            data.getAnnotation(state, baseWitness.id, expectedGetAnnotation.uniqueId)
        ).toEqual(expectedGetAnnotation);


    });

    test('annotationFromData', () => {
        const expectedAnnotationFromData = new Annotation(489, baseWitness, 0, 29, "Test", "V", otherWitness, user, "527713e8-b191-4b74-9f34-cd9f8d0e4318", expectedGetAnnotation);
        expectedAnnotationFromData.save();
        expect(
            data.annotationFromData(state, state.witnessAnnotationsById[1][expectedAnnotationFromData.uniqueId])
        ).toEqual(expectedAnnotationFromData);

    });
});