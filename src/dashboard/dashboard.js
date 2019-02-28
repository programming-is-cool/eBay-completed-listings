import React from 'react'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import ChangeAppID from './change_app_id'
import KeywordSearch from './keyword_search'

require('../../assets/css/bootstrap.min.css')

class Dashboard extends React.Component {
    render() {
        // State passed down from "App" component
        const appID = this.props.appID;
        const tempAppID = this.props.tempAppID;
        const keywords = this.props.keywords;
        const avgSalePrice = this.props.avgSalePrice;
        const appIDChange = this.props.appIDChange;
        const tempAppIDChange = this.props.tempAppIDChange
        const keywordChange = this.props.keywordChange;
        const handleAvgSalesChange = this.props.handleAvgSalesChange;
        const dashHistory = this.props.history;

        return(
            <div>
                <NavBar bg="dark">
                    <ChangeAppID 
                        appID={ appID }
                        tempAppID={ tempAppID }
                        tempAppIDChange={ tempAppIDChange }
                        appIDChange={ appIDChange }
                        dashHistory={ dashHistory }>
                    </ChangeAppID>
                    <KeywordSearch 
                        appID={ appID } 
                        keywords={ keywords } 
                        keywordChange={ keywordChange } 
                        handleAvgSalesChange={ handleAvgSalesChange }
                    />
                </NavBar>
                <Container>
                    <div>
                        { avgSalePrice }
                    </div>
                </Container>
            </div>
            
        );
    }
}

export default Dashboard;