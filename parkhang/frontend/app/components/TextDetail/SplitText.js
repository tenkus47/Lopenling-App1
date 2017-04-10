import React from 'react'
import {AutoSizer, List, CellMeasurer, CellMeasurerCache} from 'react-virtualized';
import 'react-virtualized/styles.css';
import Text from './Text'
import styles from './SplitText.css'
import _ from 'lodash'

export default class SplitText extends React.PureComponent {
    constructor(props) {
        super(props);

        this.list = null;
        this.cache = new CellMeasurerCache({
            fixedWidth: true,
        });
        this.rowRenderer = this.rowRenderer.bind(this);
    }

    updateList() {
        if (this.list) {
            this.list.recomputeRowHeights();
            this.list.forceUpdate();
        }
    }

    componentWillReceiveProps(props) {
        this.updateList();
    }

    componentDidMount() {
        window.addEventListener("resize", _.throttle(() => {
            this.cache.clearAll();
            this.updateList();
        }, 500).bind(this));
    }

    render() {
        const props = this.props;
        const rowRenderer = this.rowRenderer;
        const cache = this.cache;

        return (
            <div className={styles.splitText}>
                <AutoSizer>
                    {({ height, width }) => (
                    <List
                        ref={(list) => this.list = list}
                        height={height}
                        rowCount={props.splitText.texts.length}
                        rowHeight={cache.rowHeight}
                        rowRenderer={rowRenderer}
                        width={width}
                        overscanRowCount={3}
                        deferredMeasurementCache={cache}
                    />
                    )}
                </AutoSizer>
            </div>
        );
    }

    rowRenderer({key, index, parent, style}) {
        const props = this.props;
        const cache = this.cache;

        return (
            <CellMeasurer
                columnIndex={0}
                key={key}
                parent={parent}
                rowIndex={index}
                cache={cache}
            >
                <div
                    key={key}
                    style={style}
                    className={styles.splitTextRow}
                >
                    <Text
                        segmentedText={props.splitText.texts[index]}
                        annotations={props.annotations}
                        activeAnnotations={props.activeAnnotations}
                        limitWidth={true}
                        row={index}
                        didSelectSegment={props.didSelectSegment}
                        didSelectAnnotation={props.didSelectAnnotation}
                        annotationPositions={props.annotationPositions}
                        selectedAnnotatedSegments={props.selectedAnnotatedSegments}
                    />
                </div>
            </CellMeasurer>
        );
    }
}