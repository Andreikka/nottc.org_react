import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamIndex from '../streams/StreamIndex';
import StreamShow from '../streams/StreamShow';
import PopularSeries from '../streams/page';
import history from '../actions/history';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../streams/dropdown';
import Season from '../streams/seasons';
library.add(faIgloo);

const Page404 = ({ location }) => (
    <div>
    <title>Not found</title>
      <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
			</div>
			<h2>404 - <code>{location.pathname}</code> not found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<a href="/" class="btn btn-custom-green-small ">Back to Home</a>
		</div>
	</div>



    </div>
  );

const App = () => {
    return <div>
        <Router history={history}>
            <div>
            <Switch>
            <Route path="/" exact component={StreamIndex} />
            <Route path="/streams/show/:id" exact component={StreamShow} />
            <Route path="/dropdown" exact component={Dropdown} />
            <Route component={Page404}/>
            </Switch>
            </div>
           
        </Router>
    </div>;
}



export default App;