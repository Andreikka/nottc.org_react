import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamIndex from '../streams/StreamIndex';
import StreamShow from '../streams/StreamShow';


const App = () => {
    return <div>
        <BrowserRouter>
            <div>
            <Route path="/" exact component={StreamIndex} />
            <Route path="/stream" exact component={StreamShow} />
            </div>
        </BrowserRouter>
    </div>;
}

export default App;