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
        this.props.tempAppIDChange(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault();

        VerifyAppID(this.props.tempAppID)
            .then((data) => {
                this.props.appIDChange(this.props.tempAppID)
                this.props.tempAppIDChange('')
                if (this.props.dashHistory) {
                    this.props.closeModal();
                } else {
                    this.props.history.push('/dashboard');
                }
            }).catch((data) => {
                if (!this.props.tempAppID) {
                    alert('The field is blank.  Please enter a valid App ID.')
                } else {
                    alert('Invalid App ID.  Please enter a valid App ID.')
                    this.props.tempAppIDChange('')
                }
            });
    }

    render() {
        const app_id = this.props.appID;
        const temp_app_id = this.props.tempAppID;
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
                            <Form.Control value={ temp_app_id } placeholder="Enter app ID" onChange={ handleChange }/>
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