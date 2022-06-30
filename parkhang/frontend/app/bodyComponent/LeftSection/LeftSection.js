import React from "react";
import styles from "./LeftSection.css";
import Link from "redux-first-router-link";
import Loading from "../utility/loading";

function LeftSection(props) {
    var { Textdata } = props;
    var { activeText, isloaded } = Textdata;
    let chojukId = props.text.find(
        (l) => l.name === "བྱང་ཆུབ་སེམས་དཔའི་སྤྱོད་པ་ལ་འཇུག་པ་བཞུགས་སོ།"
    );

    if (activeText === null) {
        return (
            <div className={styles.LeftSection}>
                <div className={styles.Title}>
                    <h1>
                        <span>Browse the Library</span>
                    </h1>
                    {/* <TranslateButton/> */}
                </div>
                {!isloaded ? (
                    <Loading visible={true} />
                ) : (
                    <div className={styles.readerNavCategories}>
                        {Textdata?.detail?.map((pechalist) => {
                            return (
                                <div
                                    className={styles.gridBoxItem}
                                    key={pechalist.id}
                                    style={{ borderTop: `5px solid gray` }}
                                >
                                    <Link
                                        to={`/texts/${chojukId.id}`}
                                        className={styles.navBlockTitle}
                                    >
                                        {pechalist.texttitle}
                                    </Link>
                                    <div className={styles.navBlockDescription}>
                                        {pechalist?.desc}
                                        Taking a couple of stanzas from Metta or
                                        compassion meditation, let us engage in
                                        the power of prayer that connect us -
                                        irrespective of religion -
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default LeftSection;
