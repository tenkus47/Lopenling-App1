// @flow
import React from "react";
import styles from "./LoadMore.css";

type Props = {
    loading?: boolean
};

export default function LoadMore(props: Props) {
    let content;
    if (props.loading) {
        content = <span>Loading…</span>;
    } else {
        content = <span>Load More…</span>;
    }
    return <div className={styles.container}>{content}</div>;
}
