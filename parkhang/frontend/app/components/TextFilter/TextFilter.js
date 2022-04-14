import React from 'react'
import styles from './TextFilter.css'
import * as api from "api"

function TextFilter(props) {
type Props={
    texts:api.TextData[],
    onSelectedText:(text:api.TextData)=>void
}

    const textData:string[]=props.texts

function handleChange(data){
  var r=  textData.findIndex(x => x.name===data);
props.onSelectedText(textData[r])
}
  return (

    <div className={styles.filter}>
       <div className={styles.category}>
           <select onChange={(e)=>handleChange(e.target.value)}>
                {textData.map(list=>
                    <option key={list.id}>{list.name}</option>)
                    }
               </select>
           </div>
           
       <div className={styles.author}>
         
       <select >
               <option>
                Author
               </option>
               <option>
                 tashi
               </option>
               <option>
                   dawa
               </option>
               <option>
                   dfasdffa
               </option>
               </select>
           </div>
    </div>
  )
}

export default TextFilter