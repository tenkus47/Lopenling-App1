import React from "react";
import universal from "react-universal-component";
import Loader from "react-loader";
import { connect } from "react-redux";
function Switcher(props) {
    const { page, direction, isLoading } = props;

    return (
        <UniversalComponent
            page={page}
            isLoading={page === "Editors" ? isLoading : false}
        />
    );
}

const UniversalComponent = universal(
    (props) => import(`components/${props.page}`),
    {
        minDelay: 500,
        chunkName: (props) => props.page,
        loading: () => <Loader />,
        error: () => <div className="notFound">PAGE NOT FOUND - 404</div>,
    }
);
const mapState = ({ page, direction, ...state }) => ({
    page,
    direction,
    isLoading: !state.data2.loadedWitnesses,
    state,
});

export default connect(mapState)(Switcher);
