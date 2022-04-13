// @flow
import React, { useRef,useEffect } from "react";
import classnames from "classnames";
import { FormattedMessage } from "react-intl";
import styles from "./AnnotationDetail.css";
import type { AnnotationData } from "api";
import CheckIcon from "images/check_circle.svg";
import colours from "css/colour.css";
import {FacebookShareButton,WhatsappShareButton,FacebookIcon,WhatsappIcon} from 'react-share'

export type Props = {
    annotationData: AnnotationData,
    isActive: boolean,
    selectAnnotationHandler: () => void,
    isLoggedIn: boolean,
    editAnnotationHandler: () => void
}; 

const MAXIMUM_TEXT_LENGTH = 250;


const AnnotationDetail = (props: Props) => {
    const handleShare=()=>{
        var canvas = document.createElement("canvas");
        var text = props.annotationData.content
        var lineheight = 30;
        var lines = text.split('།').filter(l=>l!==" ");
        canvas.height = lines.length * lineheight+30;
        canvas.width = 650;
       
        var ctx = canvas.getContext('2d');
        ctx.font = "20px Arial";
        for (var i = 0; i<lines.length; i++){
                ctx.fillText(lines[i].concat('།'), 30, 40 + (i*lineheight) );
        }
        var img = document.createElement("img");
        img.src=canvas.toDataURL();
        var ahref=document.createElement("a")
        ahref.href= canvas.toDataURL();
        ahref.innerHTML="clickhere"
        document.getElementById('content').append(ahref);
      console.log(img.src)
    }
    let desc = (
         <p>
            &lt;<FormattedMessage id="annotation.delete" />&gt;
        </p>
       
    );
    
    let content = props.annotationData.content;
    if (content.trim() !== "") {
        if (content.length > MAXIMUM_TEXT_LENGTH) {
            content = content.substr(0, MAXIMUM_TEXT_LENGTH) + "…";
        }
        // content variable is the selected trimmed context
        desc = <div id="content"><p>{content}</p></div>;
    }

    let classes = [styles.annotationDetail];

    if (props.isActive) {
        classes.push(styles.active);
    }

    let className = classnames(...classes);
    return (
        <div className={className} onClick={props.selectAnnotationHandler}>
            <div className={styles.annotationHeader}>
                {props.isActive && (
                    <div className={styles.activeIcon}>
                        <CheckIcon
                            style={{ fill: colours.activeButton }}
                            width={15}
                            height={15}
                        />
                    </div>
                )}
                <h3>{props.annotationData.name}</h3>
                {props.isLoggedIn &&
                    props.isActive && (
                        <button
                            className={styles.edit}
                            onClick={props.editAnnotationHandler}
                        >
                            <svg
                                version="1.1"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                data-code="57940"
                                data-tags="mode_edit"
                            >
                                {" "}
                                <g transform="scale(0.0234375 0.0234375)">
                                    {" "}
                                    <path
                                        className={styles.editImage}
                                        d="M884 300l-78 78-160-160 78-78c16-16 44-16 60 0l100 100c16 16 16 44 0 60zM128 736l472-472 160 160-472 472h-160v-160z"
                                    />{" "}
                                </g>{" "}
                            </svg>
                            <FormattedMessage id="annotation.edit" />
                        </button>
                    )}
            </div>

            {desc}

            <div className={styles.shareContainer}>
            <FacebookShareButton 
            onClick={handleShare}
            url={`https://parkhang.lopenling.org${window.location.pathname}`}
            quote={props.annotationData.content}
            hashtag="#openPecha"
            ><FacebookIcon size={24} round={true}/></FacebookShareButton>
            <WhatsappShareButton
            onClick={()=>console.log(`https://parkhang.lopenling.org${window.location.pathname}`)}
             title="Parkhang"
             url={`https://parkhang.lopenling.org${window.location.pathname}`}
             ><WhatsappIcon size={24} round={true}/></WhatsappShareButton>
             
            </div>
        </div>
    );
};




export default AnnotationDetail;
