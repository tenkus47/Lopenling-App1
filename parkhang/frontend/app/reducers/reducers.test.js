import rootReducer, { dataReducer } from 'reducers';
import * as actions from 'actions';
import User, { getAnonymousUser } from 'lib/User'

const anonymousUser = getAnonymousUser();

const initialState = {
    data: {
        texts: [],
        textsById: {},
        sources: [],
        sourcesById: {},
        textWitnessesById: {},
        witnessesById: {},
        witnessAnnotationsById: {},
        witnessActiveAnnotationsById: {},
        loadingInitialData: false,
        loadedInitialData: false,
        loadingTexts: false,
        loadedTexts: false,
        loadingSources: false,
        loadedSources: false,
        loadingWitnesses: false,
        loadedWitnesses: false,
        loadingAnnotations: false,
        loadedAnnotations: false,
    },
    ui: {
        selectedText: false,
        searchValue: "",
        showPageImages: false,
        selectedSegments: {},
        activeAnnotations: {},
        textListVisible: true,
        temporaryAnnotations: {},
    },
    user: {
        userId: anonymousUser.id,
        userName: anonymousUser.name
    }
};

describe('Root reducer', () => {
    it('should return initial state', () => {
        expect(
            rootReducer(undefined, {}),
        ).toEqual(initialState);
    });
});

describe('Texts reducer', () => {
   it('should handle loadedInitialData', () => {
       expect(
           dataReducer(initialState.data, actions.loadedInitialData())
       ).toEqual({
           ...initialState.data,
           loadingInitialData: false,
           loadedInitialData: true,
       })
   })
});
