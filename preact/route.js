import { h, render } from 'preact';
import Boutique from './component/Boutique'
import About from './component/About';
import NotFound from './component/NotFound';
import { Router, Route } from 'preact-router';


export default function Routes(){
    return(
        <Router>
        <Route path="/about" component={About} />
        <Route path="/boutique/:username" component={Boutique} />
        <Route default component={NotFound} />
      </Router>
    )
}

