import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CompletedListingsRequest from '../../utils/api_request'
import { GetSold, createListingArray } from '../../utils/parsing'
import { SalePriceAverage, getSoldPct } from '../../utils/calculations'

require('../../assets/icons/font_awesome/all.min.js')
require('../../assets/css/bootstrap.min.css')

function KeywordSearch(props) {
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        props.keywordChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitting(true);
        if (!props.keywords) {
            setSubmitting(false);
            alert('The keyword field is blank.');
        } else { 
            CompletedListingsRequest(props.appID, props.keywords)
            .then((data) => {
                const statusRes = data.findCompletedItemsResponse[0].ack[0];
                const count = data.findCompletedItemsResponse[0].searchResult[0]['@count'];
                if (statusRes === 'Success' && count > '0') {
                    const itemsList = data.findCompletedItemsResponse[0].searchResult[0].item;
                    const listingQty = count;
                    const listings = createListingArray(itemsList);
                    const soldList = GetSold(itemsList)
                    const avgSalesPrice = SalePriceAverage(soldList)
                    const soldPct = getSoldPct(soldList, listingQty)
                    props.handleListingsChange(listings)
                    props.handlelistingQtyChange(listingQty)
                    props.handlePctSoldChange(soldPct)
                    props.handleAvgSalesChange(avgSalesPrice)
                    setSubmitting(false);
                } else if (statusRes === 'Failure' || count === '0') {
                    setSubmitting(false);
                    alert('No information from eBay was retrieved.  Check your keywords and try again.')
                }
            })
            .catch((data) => {
                setSubmitting(false);
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
            <Button className='ml-2' variant='warning' onClick={ handleSubmit }>{ submitting ? <div><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> Searching... </div> : 'Submit' }</Button>
        </Form>
    );
}

export default KeywordSearch;