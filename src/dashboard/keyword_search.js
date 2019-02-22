import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
        console.log("Handle submit works.")
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