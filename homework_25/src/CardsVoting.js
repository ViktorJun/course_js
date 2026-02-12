import {Card} from "react-bootstrap";
import logo from './logo.svg';
import React from "react";

export const CardsVoting = React.memo(({id ,name, count, onClick}) => {
    return (
        <Card onClick={() => onClick(id)}>
            <Card.Img variant="top" src={logo} alt="Card.Img" height={100}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{count}</Card.Text>
            </Card.Body>
        </Card>
    );
})