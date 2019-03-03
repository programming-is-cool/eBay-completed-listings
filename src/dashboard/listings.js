import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
require('../../assets/css/bootstrap.min.css')

function Listings(props) {
    const rows = [...Array( Math.ceil(props.listings.length / 3) )];
    const productRows = rows.map( (row, idx) => props.listings.slice(idx * 3, idx * 3 + 3) );
    const content = productRows.map((row, idx) => (
        <Row key={ idx + Math.random() }>
            <CardColumns>
                {row.map((product, i) => 
                    <Card key={ i + Math.random() } border="secondary" style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={ product.image } />
                        <Card.Body>
                            <Card.Title>
                                { product.title }
                            </Card.Title>
                            <Card.Text>
                                Condition:
                                { ' ' + product.condition }
                            </Card.Text>
                            <Card.Text>
                                { product.sellingStatus === "EndedWithSales" ? "Sold" : "Unsold" }
                            </Card.Text>
                            <Card.Text className={ product.sellingStatus === "EndedWithSales" ? "text-success" : "text-danger" }>
                                Price:
                                { ' $' + product.price }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </CardColumns>
        </Row>
    ))
    return (
        <div>
            { content }
        </div>
    );
}

export default Listings;