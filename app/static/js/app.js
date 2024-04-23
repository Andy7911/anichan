import { h, render } from 'preact';
import routes from '../../../preact/route';

const root = document.getElementById('app');
const routeKeys = Object.keys(routes);

function renderApp() {
    const currentPath = window.location.pathname;
    const component = routeKeys.find(route => currentPath.match(route));

    if (component) {
        render(routes[component](), root);
    } else {
        render(<div style={{color:"red"}}>404 - Page not found james </div>, root);
    }
}

renderApp();

// Rafraîchit l'application lorsque l'URL change
window.addEventListener('popstate', renderApp);