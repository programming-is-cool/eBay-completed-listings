import React from 'react'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ChangeAppID from './changeAppID'
import KeywordSearch from './keywordSearch'
import Listings from './listings'


function Dashboard (props) {
    // State passed down from "App" component
    const appID = props.appID;
    const tempAppID = props.tempAppID;
    const keywords = props.keywords;
    const avgSalePrice = props.avgSalePrice;
    const listingQty = props.listingQty;
    const pctSold = props.pctSold;
    const listings = props.listings

    const appIDChange = props.appIDChange;
    const tempAppIDChange = props.tempAppIDChange
    const keywordChange = props.keywordChange;
    const handleAvgSalesChange = props.handleAvgSalesChange;
    const handlelistingQtyChange = props.handlelistingQtyChange;
    const handlePctSoldChange = props.handlePctSoldChange; 
    const handleListingsChange = props.handleListingsChange;

    const dashHistory = props.history;

    return(
        <div id={ "dash_div" }>
            <NavBar sticky="top" bg="dark">
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
                    handleListingsChange={ handleListingsChange }
                />
            </NavBar>
            <Container fluid className='p-2 data-container'>
                <Row className='justify-content-center text-center'>
                    <Col md={3} className='text-center py-3 mx-2 bg-white data-elems-border'>
                        <p className='my-1'>
                            Average Sale Price:
                            <span className='text-success'>
                            { ' $' + avgSalePrice }
                            </span>
                        </p>
                    </Col>
                    <Col md={3} className='text-center py-3 mx-2 bg-white data-elems-border'>
                        <p className='my-1'>
                            Quantity: 
                            <span className='text-success'>
                                { ' ' + listingQty }
                            </span>
                        </p>
                    </Col>
                    <Col md={3} className='text-center py-3 mx-2 bg-white data-elems-border'>
                        <p className='my-1'>
                            Percentage Sold: 
                            <span className='text-success'>
                            { ' ' + pctSold + '%' }
                            </span>
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className={ "listings-containers" }>
                <Listings listings={ listings } />
            </Container>
        </div>
        
    );
}

export default Dashboard;