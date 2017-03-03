import React from 'react';
import { connect } from 'react-redux';
import TextDetail from 'components/TextDetail';
import { selectedText } from 'actions'
import { showPageImages } from 'reducers'

import PaginatedTibetanText from 'lib/PaginatedTibetanText'
import SegmentedText from 'lib/SegmentedText'

const mapStateToProps = (state) => {
    const selectedText = state.ui.selectedText;
    let witnesses = {};
    let baseWitness = null;
    if (selectedText && state.data.textWitnessesById.hasOwnProperty(selectedText.id)) {
        witnesses = state.data.textWitnessesById[selectedText.id];
        for (let witnessId of Object.keys(witnesses)) {
            const witness = witnesses[witnessId];
            if (!baseWitness || witness.is_base) {
                baseWitness = witness;
            }
        }
    }

    let annotations = [];
    if (baseWitness && selectedText
        && state.data.witnessAnnotationsById.hasOwnProperty(baseWitness.id))
    {
        annotations = state.data.witnessAnnotationsById[baseWitness.id];
    }
    return {
        text: selectedText,
        witnesses: witnesses,
        baseWitness: baseWitness,
        annotations: annotations,
        loading: state.data.loadingWitnesses || state.data.loadingAnnotations,
        paginated: showPageImages(state)
    };
};

const TextDetailContainer = connect(
    mapStateToProps
)(TextDetail);

export default TextDetailContainer;
