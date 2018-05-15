import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import './index.css';

//stateless functional
const App = () => {
    const title = 'React Coin';

    return(
        <div>
            <Header />

            <div>
                <h1>{title}</h1>
                <p>Up-to-date crypto financial data.</p>
            </div>
        </div>
    );   
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

