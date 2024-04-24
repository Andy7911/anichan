import { h, render } from 'preact';
import Routes from '../../../preact/Route';



const root = document.getElementById('app');
export default function RenderApp() {
   
    render(<Routes />, document.getElementById('app'));


}



// Rafraîchit l'application lorsque l'URL change
