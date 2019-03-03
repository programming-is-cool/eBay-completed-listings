import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CompletedListingsRequest from '../../utils/api_request'
import { GetSold, createListingArray } from '../../utils/parsing'
import { SalePriceAverage, getSoldPct } from '../../utils/calculations'
require('../../assets/css/bootstrap.min.css')

class KeywordSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.props.keywordChange(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.props.keywords) {
            alert('The keyword field is blank.');
        } else { 
            CompletedListingsRequest(this.props.appID, this.props.keywords)
            .then((data) => {
                const statusRes = data.findCompletedItemsResponse[0].ack[0];
                if (statusRes === 'Success') {
                    const itemsList = data.findCompletedItemsResponse[0].searchResult[0].item;
                    const listingQty = data.findCompletedItemsResponse[0].searchResult[0]['@count'];
                    const listings = createListingArray(itemsList);
                    const soldList = GetSold(itemsList)
                    const avgSalesPrice = SalePriceAverage(soldList)
                    const soldPct = getSoldPct(soldList, listingQty)

                    this.props.handleListingsChange(listings)
                    this.props.handlelistingQtyChange(listingQty)
                    this.props.handlePctSoldChange(soldPct)
                    this.props.handleAvgSalesChange(avgSalesPrice)
                } else if (statusRes === 'Failure') {
                    alert('No information from eBay was retrieved.  Check your keywords and try again.')
                }
            })
            .catch((data) => {
                console.log(data)
            })
        }
    }

    render() {
        // State passed down from Dashboard component, which received 
        // the State from "App" component
        const keywords = this.props.keywords;
        const handleChange = this.handleChange;
        const handleSubmit = this.handleSubmit;

        return(
            <Form inline className='mx-auto' onSubmit={ handleSubmit }>
                <Form.Label className="mr-2 text-white">Keywords</Form.Label>
                <Form.Control value={ keywords } placeholder="Enter search keywords" onChange={ handleChange }/>
                {/* <Form.Text>
                    Use a User token if users other than the eBay dev account holder is using the app.
                </Form.Text> */}
                <Button className='ml-2' variant='warning' onClick={ handleSubmit }>
                    Submit
                </Button>
            </Form>
        );
    }
}

export default KeywordSearch;