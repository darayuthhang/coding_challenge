import React from 'react';
import {
    InputGroup, 
    Form, 
    Button,
    } from 'react-bootstrap';

const SearchItem = ({
    onhandleSearch,
    onhandleSubmit
}) => {
    return ( 
        <Form className='m-3' onSubmit={onhandleSubmit} inline>
            <InputGroup className="">
                <Form.Control
                    type="text"
                    name="search"
                    placeholder="Search for book with "
                    onChange={onhandleSearch}
                    required
                />
                <Button variant="outline-secondary"  type="bumit">
                    Search
                </Button>
            </InputGroup>
        </Form>    
    );
};

export default SearchItem;
