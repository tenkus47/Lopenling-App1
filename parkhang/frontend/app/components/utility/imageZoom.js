import React from 'react'
import { MapInteractionCSS } from 'react-map-interaction';
function imageZoom({children}) {
  return (
        <MapInteractionCSS>
{children}
        </MapInteractionCSS>
  )
}

export default imageZoom