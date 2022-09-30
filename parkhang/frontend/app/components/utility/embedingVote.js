import React from 'react'
import {ThumbUp} from '@mui/icons-material'
import {Typography,Box, Badge, Chip} from '@mui/material'
import styles from './embedingVote.css'
let liste=[{
    annotationId:'234241weq',
    annotationContent:'sad',
    voteCount:20
},
{
    annotationId:'12312weq',
    annotationContent:'happy',
    voteCount:40
}]

function embedingVote() {
const [list,setList]=React.useState(liste);
    const handleClick=(id)=>{
        //increase Count from axios and refresh
     
        let newList=list.map(l=>{
            if(l.annotationId===id)
            return {
                ...l,
                voteCount:l.voteCount+1
            };
            else return l;
        })
        setList(newList)
    }

  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:2,marginTop:2}}>
        {list.map((ls,id)=>{
            return  <Box sx={{display:'flex',alignItems:'center'}} key={ls.annotationId}> 
            
         
      <Badge badgeContent={ls.voteCount} color="primary">
<Chip label={ls.annotationContent} onClick={()=>handleClick(ls.annotationId)}/>
</Badge>
        </Box>
        })}
       
    </Box>
  )
}

export default embedingVote