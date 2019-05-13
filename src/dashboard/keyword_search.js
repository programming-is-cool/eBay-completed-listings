import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CompletedListingsRequest from '../../utils/api_request'
import { GetSold, createListingArray } from '../../utils/parsing'
import { SalePriceAverage, getSoldPct } from '../../utils/calculations'
require('../../assets/css/bootstrap.min.css')

function KeywordSearch(props) {

    const handleChange = (event) => {
        event.preventDefault();
        props.keywordChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!props.keywords) {
            alert('The keyword field is blank.');
        } else { 
            CompletedListingsRequest(props.appID, props.keywords)
            .then((data) => {
                const statusRes = data.findCompletedItemsResponse[0].ack[0];
                if (statusRes === 'Success') {
                    const itemsList = data.findCompletedItemsResponse[0].searchResult[0].item;
                    const listingQty = data.findCompletedItemsResponse[0].searchResult[0]['@count'];
                    const listings = createListingArray(itemsList);
                    const soldList = GetSold(itemsList)
                    const avgSalesPrice = SalePriceAverage(soldList)
                    const soldPct = getSoldPct(soldList, listingQty)
                    props.handleListingsChange(listings)
                    props.handlelistingQtyChange(listingQty)
                    props.handlePctSoldChange(soldPct)
                    props.handleAvgSalesChange(avgSalesPrice)
                } else if (statusRes === 'Failure') {
                    alert('No information from eBay was retrieved.  Check your keywords and try again.')
                }
            })
            .catch((data) => {
                console.log(data)
            })
        }
    }

    return(
        <Form inline className='mx-auto' onSubmit={ handleSubmit }>
            <Form.Label className="mr-2 text-white">Keywords</Form.Label>
            <Form.Control value={ props.keywords } placeholder="Enter search keywords" onChange={ handleChange }/>
            {/* <Form.Text>
                Use a User token if users other than the eBay dev account holder is using the app.
            </Form.Text> */}
            <Button className='ml-2' variant='warning' onClick={ handleSubmit }>
                Submit
            </Button>
        </Form>
    );
}

export default KeywordSearch;