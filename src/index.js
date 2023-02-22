import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/base.css';
import { Header } from './header';
import { Dashboard } from './dashboard';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main>
                <Header totalFollowers="23,004" />
                <Dashboard />
            </main>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
