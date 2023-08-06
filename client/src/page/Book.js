import React from 'react';
import { 
    Container,
    Row, 
    Col, 
    Spinner,
    Form
 } from 'react-bootstrap';
import SearchItem from '../component/SearchItem';
import Item from '../component/Item';
import useBookSearch from '../hook/useBookSearch';
const Book = () => {
    const [
        onhandleChange,
        onhandleSubmit,
        listItem,
        listItemLoading,
        listItemError
    ] = useBookSearch('');
    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form className='m-3' onSubmit={onhandleSubmit} inline>
                            <SearchItem
                                onhandleSearch={onhandleChange}
                            />
                            {listItemError && <div className='text-danger'>{listItemError}</div>}
                        </Form>
                    </Col>
                </Row>
                {listItemLoading ?
                        <div className='d-flex justify-content-center'>
                            <Spinner
                                className=''
                                animation="border"
                                role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    :
                    !listItemError && listItem.length > 0 &&
                        <Row className='border text-center'>
                            {listItem.map((val, index) => 
                                <Col key={index}>
                                    <Item 
                                        author={val?.author}
                                        title={val?.title}
                                        detailPriceActionRetail={val?.detailPriceActionRetail}
                                        detailPriceActionAfterDisCount={val?.detailPriceActionAfterDisCount}
                                    />
                                </Col>
                            )}
                         
                        </Row>
                }
               
            </Container>
          
        </div>
    );
};

export default Book;
