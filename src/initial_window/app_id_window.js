import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import VerifyAppID from '../../utils/verify_app_id'

import '../../assets/css/bootstrap.min.css'

 
class AppIDWindow extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.props.appIDChange(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props.appID)
        VerifyAppID(this.props.appID , this.props.history)
        if (this.props.history.location.pathname === '/dashboard') {
            // This will prompt a "closeModal is not a function" error in console.
            // This is due to the closeModal prop not being passed a function 
            // during the "/" Route render.
            // closeModal is not used on the initial AppID entry and is only 
            // used on the "/dashboard" screen when the "Change API Key" button is pressed.
            this.props.closeModal();
        }
    }

    render() {
        const app_id = this.props.appID;
        const handleChange = this.handleChange;
        const handleSubmit = this.handleSubmit;

        return(
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Image src="../assets/images/ebay-logo.jpg" fluid />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col xs={ 2 } lg={ 3 }></Col>
                    <Col>
                        <Form onSubmit={ handleSubmit }>
                            <Form.Label >App ID key</Form.Label>
                            <Form.Control value={ app_id } placeholder="Enter app ID" onChange={ handleChange }/>
                            {/* <Form.Text>
                                Use a User token if users other than the eBay dev account holder is using the app.
                            </Form.Text> */}
                            <Button className='mt-4 btn-block' variant='warning' onClick={ handleSubmit }>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={ 2 } lg={ 3 }></Col>
                </Row>
            </Container>
        );
    }
}

export default AppIDWindow;