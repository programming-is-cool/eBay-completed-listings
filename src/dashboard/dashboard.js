import React from 'react'
import NavBar from 'react-bootstrap/Navbar'
import ChangeAppID from './change_app_id'
import KeywordSearch from './keyword_search'

require('../../assets/css/bootstrap.min.css')

class Dashboard extends React.Component {
    render() {
        // State passed down from "App" component
        const appID = this.props.appID;
        const appIDChange = this.props.appIDChange;
        const keywordChange = this.props.keywordChange;
        const keywords = this.props.keywords;
        const history = this.props.history;

        return(
            <NavBar bg="dark">
                <ChangeAppID 
                    appID={ appID }
                    appIDChange={ appIDChange }
                    history={ history }>
                </ChangeAppID>
                <KeywordSearch keywords={ keywords } keywordChange={ keywordChange }/>
            </NavBar>
        );
    }
}

export default Dashboard;