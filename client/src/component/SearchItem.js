import React from 'react';
import {
    InputGroup, 
    Form, 
    Button
    } from 'react-bootstrap';

const SearchItem = ({
    onhandleSearch
}) => {
    return ( 
        <InputGroup className="">
            <Form.Control
                type="text"
                name="search"
                placeholder="Search for book with "
                onChange={onhandleSearch}
                required
            />
            <Button variant="outline-secondary" type="bumit">
                Search
            </Button>
        </InputGroup>     
    );
};

export default SearchItem;
