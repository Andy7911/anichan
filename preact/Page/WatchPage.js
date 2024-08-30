

import { h  } from 'preact';
import { useState,useEffect } from 'preact/hooks';
import axios from 'axios';




export default function WatchPage() {
    const [videos,setVideo] = useState([{}])
useEffect(()=>{
console.log("use effect watch")

})
  return (
    <div className='watching'>


    </div>
  )
}
