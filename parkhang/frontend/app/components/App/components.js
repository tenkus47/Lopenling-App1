// components.js
import React, { Suspense } from "react";
import EditorContainer from "components/Editors";
import HomePageContainer from "components/HomePage";
import VoteComponent from 'components/utility/embedingVote'
const HomePage = () => <HomePageContainer />;

const Editors = () => (
        <EditorContainer />
);
const Vote=()=>(
    <VoteComponent/>
);

const mapStateToProps = ({ location }) => ({
    userId: location.payload.id,
});

const NotFound = () => <h3>404</h3>;

export { HomePage, Editors,Vote, NotFound };
