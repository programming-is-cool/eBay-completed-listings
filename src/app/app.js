import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import AppIDWindow from '../components/appIDWindow'
import Dashboard from '../components/dashboard';
import InitialLoad from '../components/initialLoad';

require('../../assets/css/bootstrap.min.css')
require('../../assets/css/custom.css')

function App (props) {
    const [appID, setAppID] = useState('');
    const [tempAppID, setTempAppID] = useState('');
    const [keywords, setKeywords] = useState('');
    const [avgSalePrice, setAvgSalePrice] = useState(0);
    const [listingQty, setListingQty] = useState(0);
    const [pctSold, setPctSold] = useState(0);
    const [listings, setListings] = useState([]);

    const handleAppIDChange = (appID) => {
        setAppID(appID);
    }

    const handleTempAppIDChange = (tempAppID) => {
        setTempAppID(tempAppID);
    }

    const handleKeywordChange = (keywords) => {
        setKeywords(keywords);
    }

    const handleAvgSalesChange = (avgSalePrice) => {
        setAvgSalePrice(avgSalePrice);
    }

    const handlelistingQtyChange = (listingQty) => {
        setListingQty(listingQty);
    }

    const handlePctSoldChange = (pctSold) => {
        setPctSold(pctSold);
    }

    const handleListingsChange = (listings) => {
        setListings(listings);
    }

    return(
        <div>
            <Route exact path='/' render={ (props) => 
                <InitialLoad {...props} 
                    appID={ appID }
                    tempAppID={ tempAppID }
                    tempAppIDChange={ handleTempAppIDChange }
                    appIDChange={ handleAppIDChange } 
                /> } 
            />
            <Route path='/appid' render={ (props) => 
                <AppIDWindow {...props}
                    appID={ appID }
                    tempAppID={ tempAppID }
                    tempAppIDChange={ handleTempAppIDChange }
                    appIDChange={ handleAppIDChange } 
                /> }  
            />
            <Route path="/dashboard" render={ (props) => 
                <Dashboard {...props}
                    appID={ appID }
                    tempAppID={ tempAppID }
                    keywords={ keywords } 
                    avgSalePrice={ avgSalePrice }
                    listingQty={ listingQty }
                    pctSold={ pctSold }
                    listings={ listings }
                    tempAppIDChange={ handleTempAppIDChange }
                    appIDChange={ handleAppIDChange }
                    keywordChange={ handleKeywordChange }
                    handleAvgSalesChange={ handleAvgSalesChange }
                    handlelistingQtyChange={ handlelistingQtyChange }
                    handlePctSoldChange={ handlePctSoldChange }
                    handleListingsChange={ handleListingsChange } 
                /> } 
            />
        </div>
    );
}

ReactDOM.render(
    <Router >
        <App />
    </Router>,
    document.getElementById('root')
);