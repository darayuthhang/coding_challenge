import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchItem from '../component/SearchItem';
import ListItem from '../component/ListItem';
import useBookSearch from '../hook/useBookSearch';
const Book = () => {
    const [
        onhandleChange,
        onhandleSubmit,
        listItem,
        listItemLoading,
        listItemError
    ] = useBookSearch('');
  

    // const onhandleSubmit = (e) => {
    //     e.preventDefault();
    //     alert("submit");
    //     console.log(sku);
    // }
    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <SearchItem 
                            onhandleSearch={onhandleChange}
                            onhandleSubmit={onhandleSubmit}
                            />
                    </Col>
                </Row>
                {listItem.length > 0 &&
                    <Row className='border text-center'>
                        <Col>
                            <ListItem />
                        </Col>
                        <Col>
                            <ListItem />
                        </Col>
                        <Col>
                            <ListItem />
                        </Col>
                    </Row>
                }
             
            </Container>
          
        </div>
    );
};

export default Book;
