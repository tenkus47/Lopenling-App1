import React,{useEffect,useRef} from 'react'
import styles from './TextFilter.css'
import * as api from "api"
import addTibetanShay from "lib/addTibetanShay";
import { FormattedMessage, injectIntl } from "react-intl";
import Link from 'redux-first-router-link'

type Props={
    texts:api.TextData[],
    selectedText:String,
    onSelectedText:(text:api.TextData)=>void,
    onAuthorChange:(data:any)=>void,
}
function TextFilter(props:Props) {
  const selectRef=useRef(null);
  useEffect(()=>{
    selectRef.current.value=props.selectedText?.name;
  },[props.selectedText])

    const textData:string[]=props.texts

function handleChange(data){
  var r=  textData.findIndex(x => x.name===data);
props.onSelectedText(textData[r])
}

function authorChange(e){
    props.onAuthorChange(e.target.value);
 
    let url=window.location.origin+"/text?author="+e.target.value;
    console.log(url)
}
  return (
    <div className={styles.filter}>
      <label>
      <FormattedMessage id="filter.category" />
      </label>
           <select ref={selectRef} className={styles.category} onChange={(e)=>handleChange(e.target.value)}>
         

                {textData.map(list=>

  <option key={list.id} value={list?.name}>  
  {addTibetanShay(list.name)}
  </option>
  )
                    }
               </select>
<label>
<FormattedMessage id="filter.author" />
</label>
           <select  onChange={authorChange}>
                    <option value='kalsang'>  
                      ༡ རྩོམ་པ་པོ།་
                    </option>              
               </select>
           </div>
    
  )
}

export default TextFilter