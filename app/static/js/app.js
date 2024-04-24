const { h, render } = require('preact');
import routes from '../../../preact/route';

const root = document.getElementById('app');
const routeKeys = Object.keys(routes);

export default function renderApp() {
    const currentPath = window.location.pathname;
    const component = routeKeys.find(route => currentPath.match(route));

    if (component) {
        render(routes[component](), root);
    } else {
        render(<div style={{color:"red"}}>404 - Page not found james </div>, root);
    }
}



// Rafraîchit l'application lorsque l'URL change
window.addEventListener('popstate', renderApp);