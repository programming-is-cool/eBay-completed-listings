import React from 'react';
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AppIDWindow from '../initial_window/app_id_window'
import Dashboard from '../dashboard/dashboard';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleAppIDChange = this.handleAppIDChange.bind(this);
        this.handleTempAppIDChange = this.handleTempAppIDChange.bind(this);
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.state = {
            app_id: '',
            temp_app_id: '',
            keywords: ''
        }
    }

     handleAppIDChange(app_id) {
        this.setState({
            app_id: app_id
        });
    }

    handleTempAppIDChange(temp_app_id) {
        this.setState({
            temp_app_id: temp_app_id
        });
    }

    handleKeywordChange(keywords) {
        this.setState({
            keywords: keywords
        });
    }

    render() {
        const app_id = this.state.app_id;
        const temp_id = this.state.temp_app_id;
        const handleAppIDChange = this.handleAppIDChange;
        const handleTempAppIDChange = this.handleTempAppIDChange;
        const handleKeywordChange = this.handleKeywordChange;
        const keywords = this.state.keywords;
        return(
            <div>
                <Route exact path='/' render={ (props) => <AppIDWindow {...props} 
                    appID={ app_id }
                    tempAppID={ temp_id }
                    tempAppIDChange={ handleTempAppIDChange }
                    appIDChange={ handleAppIDChange } /> }  
                />
                <Route path="/dashboard" render={ (props) => <Dashboard {...props}
                    appID={ app_id }
                    tempAppID={ temp_id }
                    tempAppIDChange={ handleTempAppIDChange }
                    appIDChange={ handleAppIDChange }
                    keywords={ keywords } 
                    keywordChange={ handleKeywordChange }/> } 
                />
            </div>
        );
    }
}

ReactDOM.render(
    <Router >
        <App />
    </Router>,
    document.getElementById('root')
);