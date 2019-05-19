import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
require('../../assets/css/bootstrap.min.css')

function Listings(props) {
    const content = props.listings.map((listing, i) =>
        <Card key={ i + Math.random() }  className={ "listings-elems" } >
            <Row className={ "no-gutters" }>
                <Col md={ 3 }>
                    <Card.Img variant="top" src={ listing.image } className={ "img-thumbnail" }/>
                </Col>
                <Col md={ 9 }>
                    <Card.Body>
                        <Card.Title>
                            { listing.title }
                        </Card.Title>
                        <Card.Text>
                            Condition:
                            { ' ' + listing.condition }
                        </Card.Text>
                        <Card.Text>
                            { listing.sellingStatus === "EndedWithSales" ? "Sold" : "Unsold" }
                        </Card.Text>
                        <Card.Text className={ listing.sellingStatus === "EndedWithSales" ? "text-success" : "text-danger" }>
                            Price:
                            { ' $' + listing.price }
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
    return (
        <div>
            { content }
        </div>
    );
}

export default Listings;