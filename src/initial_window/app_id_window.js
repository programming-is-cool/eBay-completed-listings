import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import VerifyAppID from '../../utils/verify_app_id'

import '../../assets/css/bootstrap.min.css'

function AppIDWindow(props) {
    let tempAppID = props.tempAppID;

    const handleChange = (event) => {
        event.preventDefault();
        props.tempAppIDChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!tempAppID) {
            alert('The App ID field is blank.')
        } else {
            VerifyAppID(tempAppID)
            .then((data) => {
                props.appIDChange(tempAppID)
                props.tempAppIDChange('')
                if (props.dashHistory) {
                    props.closeModal();
                } else {
                    props.history.push('/dashboard');
                }
            }).catch((data) => {
                alert(data)
                props.tempAppIDChange('')
            });
        }
    }

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
                        <Form.Control value={ tempAppID } placeholder="Enter app ID" onChange={ handleChange }/>
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

export default AppIDWindow;