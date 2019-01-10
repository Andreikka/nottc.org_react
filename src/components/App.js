import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamIndex from '../streams/StreamIndex';
import StreamShow from '../streams/StreamShow';
import history from '../actions/history';


const App = () => {
    return <div>
        <Router history={history}>
            <div>
            <Route path="/" exact component={StreamIndex} />
            <Route path="/streams/show/:id" exact component={StreamShow} />
            </div>
        </Router>
    </div>;
}

export default App;