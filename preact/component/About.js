const { h,   } = require('preact');
import { useState } from 'preact/hooks';
import { Link } from 'preact-router';

function About(){

    const [Message, setMessage] = useState("page about");
    return(
    <div>
        <h1 style={{color:"red"}}>{Message}</h1>
        <Link href="/boutique">boutique</Link>
    </div>)
};

export default About;