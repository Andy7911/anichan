import { h  } from 'preact';
import { useState } from 'preact/hooks';

function NotFound(){

    const [Message, setMessage] = useState("Page no found");
return(
    <div>
       
        <h1 style={{color:"red"}}>{Message}</h1>
     
    </div>);
}
export default NotFound;