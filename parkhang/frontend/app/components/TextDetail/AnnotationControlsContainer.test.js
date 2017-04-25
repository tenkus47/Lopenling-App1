import React from 'react'
import { Provider } from 'react-redux'
import AnnotationControlsContainer, { mapStateToProps } from './AnnotationControlsContainer'
import AnnotatedText from 'lib/AnnotatedText'
import Text from 'lib/Text'
import Source from 'lib/Source'
import Witness from 'lib/Witness'
import Annotation from 'lib/Annotation'
import { getAnonymousUser } from 'lib/User'

test('mapStateToProps with no activeAnnotation', () => {

    const user = getAnonymousUser();
    const state = {
        data: {
            textsById: {
                1: {
                    id: 1,
                    name: 'Test'
                }
            }
        },
        ui: {
            selectedText: 1
        },
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
        user: user,
        temporaryAnnotation: null
    });
});


