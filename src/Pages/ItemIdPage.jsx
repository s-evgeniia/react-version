import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching";
import ItemService from "../API/ItemService";
import Loader from "../Loader/Loader";

const ItemIdPage = () => {
    const params = useParams()
    const [item, setItem] = useState({})
    const [fetchItemById, isLoading, error] = useFetching(async (id) => {
        const response = await ItemService.getById(id)
        setItem(response.data)
    } )

    useEffect(() => {
        fetchItemById(params.id)
    }, [])
    return (
        <div>
            <h1>You are opened item with ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{item.id}. {item.title}</div>
            }
        </div>
    );
};

export default ItemIdPage;