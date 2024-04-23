const { h, render, Component,Fragment } = require('preact');

class App extends Component {
    constructor() {
        super();
        this.state = {
            message: 'hello preact'
        };
    }


    render() {
        return (
            <div>
                <h1 style={{color: "red"}} >{this.state.message}</h1>
            </div>
        );
    }
}


render(<App />, document.getElementById('app'));