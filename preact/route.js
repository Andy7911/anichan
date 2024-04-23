import { h, render } from 'preact';
import Boutique from './component/Boutique'
import About from './component/About';

const routes = {
    '/preact': () => <About />,
    '/boutique': () => <Boutique/>
   
};

export default routes;