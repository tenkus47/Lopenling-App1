// @flow
import React,{useState} from "react";
import classnames from "classnames";
import { FormattedMessage } from "react-intl";
import styles from "./AnnotationDetail.css";
import type { AnnotationData } from "api";
import CheckIcon from "images/check_circle.svg";
import colours from "css/colour.css";

import {FacebookShareButton,
    WhatsappShareButton,
    FacebookIcon,
    WhatsappIcon} from 'react-share'
    


export type Props = {
    annotationData: AnnotationData,
    isActive: boolean,
    selectAnnotationHandler: () => void,
    isLoggedIn: boolean,
    editAnnotationHandler: () => void,
    fontSize: Number
   }; 

const MAXIMUM_TEXT_LENGTH = 250;

const AnnotationDetail = (props: Props) => {

   const [imageUrl,setImageUrl]=useState(null);
     

    function longest_str_in_array(arra)
    {
      var max_str = arra[0].length;
      var ans = arra[0].length;
      for (var i = 0; i < arra.length; i++) {
          var maxi = arra[i].length;
          if (maxi > max_str) {
              ans = arra[i].length;
              max_str = maxi;
          }
      }
      return ans;
  }
     function mergeArray(arr){
         var textCount=arr.length;
         var maxPerLine=55;


         for (var i=0;i<Math.ceil(arr.join().length/maxPerLine)+1;i++){
            
            if( arr[i] && arr[i+1] && arr[i].length < maxPerLine){
                arr[i]=arr[i]+' '+arr[i+1];
                arr.splice(i+1,1)
                mergeArray(arr)
            }
         else if(arr[i] && arr[i+1] && arr[i].length > maxPerLine)
              
               {    
                // code to cut selected text should be here
            }
         }
       return arr;
       
     }

    const ImageDownload=()=>{
        var fontSize= props.fontSize;
        var text = props.annotationData.content
        var lineheight = 50;
        var ra = text.split(' ')
        var lines = mergeArray(ra)
        var canvas = document.createElement("canvas");
        canvas.height = lines.length * lineheight+30;
        canvas.width =90 + 6 * longest_str_in_array(lines);
        
        var ctx = canvas.getContext('2d');
       
            var grad = ctx.createRadialGradient(300, 100, 0, 300, 100, 316.23);
            grad.addColorStop(0, 'rgba(255, 255, 0, 1)');
            grad.addColorStop(0.57, 'rgba(0, 188, 212, 1)');
            grad.addColorStop(1, 'rgba(238, 130, 238, 1)');
            ctx.fillStyle=grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
       
      
        ctx.font = `${fontSize}`+"px Arial";
        ctx.fillStyle="black"
        
        for (var i = 0; i<lines.length; i++){
                       ctx.fillText(lines[i].concat(' '), 35, 35 + (i*lineheight) );
                        }
        var data = canvas.toDataURL();
        var img = document.createElement('img');
        img.src = data;
        setImageUrl(data);
        // runClick(data);
        // creating a clickable link for downloading image
        var a = document.createElement('a');
        a.setAttribute("download", "SelectedText.jpeg");
        a.setAttribute("href", data);
        a.appendChild(img);
        
        var w = open();
        w.document.title = props.annotationData.content.slice(0,30)+'...';
        w.document.body.innerHTML = '<h1>click on Image to Download</h1>';
        w.document.body.appendChild(a);
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
        desc = <p>{content}</p>;
    }

    let classes = [styles.annotationDetail];
  
const runClick=()=>{
    var imgURL = imageUrl
    FB.api('/photos', 'post', {
        message: 'photo description',
        access_token:"EAAW41ADJQ7kBAF73Bls1ZAqmeVZCuZBgYZAfPPXdVPxCvikV5OCZA229RbB1USuPLUlwVmkqihZAO5NZCRua0080zKmZCvAZAS5Kw6vw8noAUahNYdnTDYcbl062BBBADkhptyjpnxaMxzu1ehxMR1B32Sbn6IAZBmZAWzms3KPy0ahGy2Bgvev0zY1qcsn5Y4ZB9xIBqD5R6cZBLqrZB5zdBt1hoKsXn585wTLacoqVxMHMHZCSrVHepDZBZBBZCG",
        url: imgURL
    }, function (response) {

        if (!response || response.error) {
            alert('Error occured:' + response);
        } else {
            alert('Post ID: ' + response.id);
        }

    });
}


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
           
                   <Sharebutton props={props}/>
                      
        </div>
    );
};





const Sharebutton=({props})=>{
    return (
        <div className={styles.shareContainer}>
            <div className={styles.shareButton}> <FormattedMessage id="annotation.share" /></div>
            <FacebookShareButton
            className={styles.facebookButton}
                id="sharebutton"
                url={`https://parkhang.lopenling.org${window.location.pathname}`}
                quote={props.annotationData.content}
                hashtag="#openPecha"
            >
                <FacebookIcon size={20} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton
                className={styles.whatsappButton}
                onClick={() =>
                    console.log(
                        `https://parkhang.lopenling.org${window.location.pathname}`
                    )
                }
                title="Parkhang"
                url={`https://parkhang.lopenling.org${window.location.pathname}`}
            >
                <WhatsappIcon size={20} round={true} />
            </WhatsappShareButton>
               {/* <img onClick={ImageDownload} className={styles.downloadlogo} src="https://img.icons8.com/material-outlined/24/000000/download--v1.png"/>
                <img onClick={runClick} className={styles.downloadlogo} src="https://img.icons8.com/windows/32/000000/upload.png"/> */}
    
           
             </div>
    );
}


export default AnnotationDetail;
