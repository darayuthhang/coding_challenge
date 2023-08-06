import React, {useState} from 'react';

const useBookSearch = (initialValue) => {
    const [sku, setSku] = useState(initialValue);
    const [listItem, setListItem] = useState([]);
    const [listItemLoading, setListItemLoading] = useState(false);
    const [listItemError, setListItemError] = useState(null);

    const onhandleChange = (e) => {
        setSku(e.target.value);
    }
    const onhandleSubmit = (e) => {
        e.preventDefault();
        console.log(sku);
    }
    return [
        onhandleChange, 
        onhandleSubmit,
        listItem,
        listItemLoading,
        listItemError
    ]
};

export default useBookSearch;
