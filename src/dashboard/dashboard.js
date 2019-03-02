import React from 'react'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ChangeAppID from './change_app_id'
import KeywordSearch from './keyword_search'

require('../../assets/css/bootstrap.min.css')
require('../../assets/css/custom.css')

class Dashboard extends React.Component {
    render() {
        // State passed down from "App" component
        const appID = this.props.appID;
        const tempAppID = this.props.tempAppID;
        const keywords = this.props.keywords;
        const avgSalePrice = this.props.avgSalePrice;
        const listingQty = this.props.listingQty;
        const pctSold = this.props.pctSold;

        const appIDChange = this.props.appIDChange;
        const tempAppIDChange = this.props.tempAppIDChange
        const keywordChange = this.props.keywordChange;
        const handleAvgSalesChange = this.props.handleAvgSalesChange;
        const handlelistingQtyChange = this.props.handlelistingQtyChange;
        const handlePctSoldChange = this.props.handlePctSoldChange; 

        const dashHistory = this.props.history;

        return(
            <div>
                <NavBar bg="dark">
                    <ChangeAppID 
                        appID={ appID }
                        tempAppID={ tempAppID }
                        tempAppIDChange={ tempAppIDChange }
                        appIDChange={ appIDChange }
                        dashHistory={ dashHistory }
                    />
                    <KeywordSearch 
                        appID={ appID } 
                        keywords={ keywords } 
                        keywordChange={ keywordChange } 
                        handleAvgSalesChange={ handleAvgSalesChange }
                        handlelistingQtyChange={ handlelistingQtyChange }
                        handlePctSoldChange={ handlePctSoldChange }
                    />
                </NavBar>
                <Container fluid className='p-2 data-container'>
                    <Row className='justify-content-center text-center'>
                        <Col md={3} className='text-center py-3 mx-2 bg-white data-container-border'>
                            <p className='my-1'>
                                Average Sale Price:
                                <span className='text-success'>
                                { ' $' + avgSalePrice }
                                </span>
                            </p>
                        </Col>
                        <Col md={3} className='text-center py-3 mx-2 bg-white data-container-border'>
                            <p className='my-1'>
                                Quantity: 
                                <span className='text-success'>
                                    { ' ' + listingQty }
                                </span>
                            </p>
                        </Col>
                        <Col md={3} className='text-center py-3 mx-2 bg-white data-container-border'>
                            <p className='my-1'>
                                Percentage Sold: 
                                <span className='text-success'>
                                { ' ' + pctSold + '%' }
                                </span>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }
}

export default Dashboard;