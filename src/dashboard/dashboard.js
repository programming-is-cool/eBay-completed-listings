import React from 'react'
import NavBar from 'react-bootstrap/Navbar'
import ChangeAppID from './change_app_id'
import KeywordSearch from './keyword_search'

require('../../assets/css/bootstrap.min.css')

class Dashboard extends React.Component {
    render() {
        // State passed down from "App" component
        const appID = this.props.appID;
        const tempAppID = this.props.tempAppID;
        const appIDChange = this.props.appIDChange;
        const tempAppIDChange = this.props.tempAppIDChange
        const keywordChange = this.props.keywordChange;
        const keywords = this.props.keywords;
        const dashHistory = this.props.history;

        return(
            <NavBar bg="dark">
                <ChangeAppID 
                    appID={ appID }
                    tempAppID={ tempAppID }
                    tempAppIDChange={ tempAppIDChange }
                    appIDChange={ appIDChange }
                    dashHistory={ dashHistory }>
                </ChangeAppID>
                <KeywordSearch keywords={ keywords } keywordChange={ keywordChange }/>
            </NavBar>
        );
    }
}

export default Dashboard;