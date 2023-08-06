import React, {useState} from 'react';
import axios from '../axios/Axios';
const useBookSearch = (initialValue) => {
    const [sku, setSku] = useState(initialValue);
    const [listItem, setListItem] = useState([]);
    const [listItemLoading, setListItemLoading] = useState(false);
    const [listItemError, setListItemError] = useState(null);

    const fetchApi = async () => {
        setListItemLoading(true)
        try {
            let data = await axios.get(`/search/?sku=${sku}`);
            setListItem(data?.data);
            setListItemLoading(false)
        } catch (error) {
            setListItemError(error?.message);
            setListItemLoading(false);
        }
    }
    const onhandleChange = (e) => {
        setSku(e.target.value);
    }
    const onhandleSubmit = (e) => {
        e.preventDefault();
        resetsetItemErrorToDefault()
        fetchApi();
    }
    const resetsetItemErrorToDefault = () => {
        if (listItemError) setListItemError(null);
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
