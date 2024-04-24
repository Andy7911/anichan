import { h  } from 'preact';
import { useState } from 'preact/hooks';

function Boutique(props){
    const { username } = props.matches;

    const [Message, setMessage] = useState("welcome to page boutique");
return(
    <div>
        <p style={{color:"red"}}>{username}</p>
        <h1 style={{color:"red"}}>{Message}</h1>
     
    </div>);
}
export default Boutique;