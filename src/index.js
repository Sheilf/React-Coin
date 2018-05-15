import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/common/Header';

//stateless functional
const App = () => {
    const title = 'React Coin';

    return(
        <Header />

        <div>
            <h1>{title}</h1>
            <p>Up-to-date crypto financial data.</p>
        </div>
    );   
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

