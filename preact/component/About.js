import { h}  from 'preact';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router';

function About(){
    const comedianName = 'Dave Chappelle'; // Donnée à envoyer

    const [Message, setMessage] = useState("page about");
    return(
    <div>
        <h1 style={{color:"red"}}>{Message}</h1>
        <Link href="/boutique/Joedoe">boutique</Link>
    </div>)
};

export default About;