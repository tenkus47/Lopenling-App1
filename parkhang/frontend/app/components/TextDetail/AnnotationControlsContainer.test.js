import React from 'react'
import { Provider } from 'react-redux'
import AnnotationControlsContainer, { mapStateToProps } from './AnnotationControlsContainer'
import AnnotatedText from 'lib/AnnotatedText'
import Text from 'lib/Text'
import Source from 'lib/Source'
import Witness from 'lib/Witness'
import Annotation from 'lib/Annotation'
import { getAnonymousUser } from 'lib/User'


// TODO: create test data

test('mapStateToProps with no state', () => {

    const user = getAnonymousUser();
    const state = {
        user: {
            userId: user.id,
            userName: user.name
        }
    };

    expect(
        mapStateToProps(state, {activeAnnotation: null})
    ).toEqual({
        annotationsData: null,
        activeAnnotation: null,
        baseAnnotation: null,
        availableAnnotations: null,
        user: user
    });
});


