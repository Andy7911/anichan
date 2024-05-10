import { h  } from 'preact';
import { useState } from 'preact/hooks';

function Dashboard(props){
    const { username } = props.matches;

    const [Message, setMessage] = useState("Rien ne compile james ");
return(
    <div className='board'>
        <p style={{color:"red"}}>{username}</p>
        <h1 style={{color:"red"}}>{Message}</h1>
    <div className='board'>
        <div className='board__row'>
<div className='board__cell'>Name</div>
<div className='board__cell'>Genre </div>
<div className='board__cell'>Last episode </div>
<div className='board__cell'>actions</div>

        </div>
        

    </div>
     
    </div>);
}
export default Dashboard;