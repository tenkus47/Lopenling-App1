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
    const color = [
        "#F1592A",
        "#652D90",
        "#3AB54A",
        "black",
        "#92278F",
        "#0088CC",
        "#0088CC",
        "orange",
    ];
    if (activeText === null && Textdata.detail.length > 0) {
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
                        {Textdata.detail.map((pechalist, i) => {
                            return (
                                <Link
                                    to={`/texts/${chojukId.id}`}
                                    className={styles.gridBoxItem}
                                    key={pechalist.id}
                                >
                                    <div
                                        style={{
                                            paddingInline: 20,
                                            border: "1px solid #eee",
                                            borderLeft: `5px solid ${color[i]}`,
                                        }}
                                    >
                                        <div className={styles.navBlockTitle}>
                                            {pechalist.texttitle}
                                        </div>
                                        <div
                                            className={
                                                styles.navBlockDescription
                                            }
                                        >
                                            {pechalist?.desc}
                                            Taking a couple of stanzas from
                                            Metta or compassion meditation, let
                                            us engage in the power of prayer
                                            that connect us - irrespective of
                                            religion -
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    } else {
        return null;
    }
}

export default LeftSection;
