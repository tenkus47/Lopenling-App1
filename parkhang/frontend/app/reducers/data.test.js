import { dataReducer } from 'reducers';
import Source from 'lib/Source'
import Witness from 'lib/Witness'
import Annotation from 'lib/Annotation'
import dataReducers, { initialDataState } from 'reducers/data'
import * as actions from 'actions';

describe('Adding and removing reducer', () => {

    const source1 = new Source(1, "Derge");
    const text = new Text(1, "དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ");
    const baseWitness = new Witness(1, text, source1, "Test witness", true);
    const annotation = new Annotation(1, baseWitness, 0,  27, "༄༅༅", baseWitness);
    const addAction = actions.addedAnnotation(annotation);

    let state = {...initialDataState};
    let witnessActiveAnnotations = {
        [baseWitness.id]: [annotation.id]
    };
    let expectedState = {
        ...state,
        witnessActiveAnnotationsById: witnessActiveAnnotations,
    };

    test('Adding annotation', () => {
        expect(
            dataReducers[addAction.type](state, addAction)
        ).toEqual(expectedState);
    });

    const removeAction = actions.removedAnnotation(annotation);

    test('Removing annotation', () => {
        const state = dataReducers[addAction.type]({...initialDataState}, addAction);
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
    });
});