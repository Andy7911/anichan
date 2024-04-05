import { h, Component, render } from 'https://unpkg.com/preact?module';
import htm from 'https://unpkg.com/htm?module';

  // Create your app
  const html = htm.bind(h);


 function App (props) {
    return html`<h1 style='color:white;'>Hello ${props.name}!</h1>`;
  }
  render(html`<${App} name="World" />`, document.body);