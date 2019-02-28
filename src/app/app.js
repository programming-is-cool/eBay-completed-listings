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
        this.handleAvgSalesChange = this.handleAvgSalesChange.bind(this);
        this.state = {
            appID: '',
            tempAppID: '',
            keywords: '',
            avgSalePrice: 0
        }
    }

     handleAppIDChange(appID) {
        this.setState({
            appID: appID
        });
    }

    handleTempAppIDChange(tempAppID) {
        this.setState({
            tempAppID: tempAppID
        });
    }

    handleKeywordChange(keywords) {
        this.setState({
            keywords: keywords
        });
    }

    handleAvgSalesChange(avgSalePrice) {
        this.setState({
            avgSalePrice: avgSalePrice
        })
    }

    render() {
        const appID = this.state.appID;
        const tempAppID = this.state.tempAppID;
        const keywords = this.state.keywords;
        const avgSalePrice = this.state.avgSalePrice;
        const handleAppIDChange = this.handleAppIDChange;
        const handleTempAppIDChange = this.handleTempAppIDChange;
        const handleKeywordChange = this.handleKeywordChange;
        const handleAvgSalesChange = this.handleAvgSalesChange;
        return(
            <div>
                <Route exact path='/' render={ (props) => <AppIDWindow {...props}
                    tempAppID={ tempAppID }
                    tempAppIDChange={ handleTempAppIDChange }
                    appIDChange={ handleAppIDChange } /> }  
                />
                <Route path="/dashboard" render={ (props) => <Dashboard {...props}
                    appID={ appID }
                    tempAppID={ tempAppID }
                    keywords={ keywords } 
                    avgSalePrice={ avgSalePrice }
                    tempAppIDChange={ handleTempAppIDChange }
                    appIDChange={ handleAppIDChange }
                    keywordChange={ handleKeywordChange }
                    handleAvgSalesChange={ handleAvgSalesChange }
                    /> } 
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