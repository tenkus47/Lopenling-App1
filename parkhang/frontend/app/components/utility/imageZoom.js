import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function imageZoom({children}) {
  return (
     <Zoom>{children} </Zoom>
  )
}

export default imageZoom