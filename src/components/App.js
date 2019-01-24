import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamIndex from '../streams/StreamIndex';
import StreamShow from '../streams/StreamShow';
import PopularSeries from '../streams/page';
import history from '../actions/history';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../streams/dropdown';
import Season from '../streams/seasons';
library.add(faIgloo)


const App = () => {
    return <div>
        <Router history={history}>
            <div>
            <Route path="/" exact component={StreamIndex} />
            <Route path="/page" exact component={PopularSeries} />
            <Route path="/season" exact component={Season} />
            <Route path="/streams/show/:id" exact component={StreamShow} />
            <Route path="/dropdown" exact component={Dropdown} />
            </div>
        </Router>
    </div>;
}



export default App;