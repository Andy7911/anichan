import { h  } from 'preact';
import { useState } from 'preact/hooks';
import img from "../../app/static/img/icon/logo-search.webp"
function NotFound(){

    const [Message, setMessage] = useState("Page no found");
return(
    <div className='not-found'>
       <img className='img' src={img}/>
        <h1 style={{color:"red"}}>{Message}</h1>
     
    </div>);
}
export default NotFound;