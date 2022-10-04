import React from 'react'
import RecommendIcon from '@mui/icons-material/Recommend';
import styles from './Vote.css'


function index({data}) {
 const [no,setno]=React.useState(20);
  const handleClick=()=>setno(prev=>prev+1)
  return (<div className={styles.voteContainer}
  onClick={handleClick}>
  
    <button aria-label="vote"  
    className={styles.voteBtn}>

        <RecommendIcon color='inherit'/>
        </button>
        <span className={styles.number}>{no}</span>
        </div>
  )
}

export default index