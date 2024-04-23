const { h  } = require('preact');
import { useState } from 'preact/hooks';
import 'preact/debug';
function Boutique(){

    const [Message, setMessage] = useState("welcome to page boutique");
return(
    <div>
        <h1 style={{color:"red"}}>{Message}</h1>
       
    </div>);
}
export default Boutique;