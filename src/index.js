import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/base.css';
import { Header } from './header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main>
                <Header />
            </main>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
