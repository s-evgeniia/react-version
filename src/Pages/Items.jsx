import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import SellItemsList from "../components/SellItemsList";
import ItemFilter from "../components/ItemFilter";
import {useItems} from "../hooks/useItems";
import ItemService from "../API/ItemService";
import Loader from "../Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Items() {
    //Создание списка товаров с атрибутами размера, цвета, названия, описания и цены
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(20)
    const [page, setPage] = useState(1)
    const sortedAndSearchedItems = useItems(items, filter.sort, filter.query);
    const itemsToB = [];

    const [fetchItems, isItemsLoading, itemError] = useFetching(async (limit, page) => {
        const response = await ItemService.getAll(limit, page);
        setItems(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchItems(limit, page)
    }, [] )

    //Добавление товара в корзину
    const addToCart = (item) => {
        itemsToB.push(item)
        console.log(itemsToB)
    }

    //Реализация переключения страниц
    const changePage = (page) => {
        setPage(page)
        fetchItems(limit, page)
    }

    return (
        <div className="App">

            {/*Реализация сортировки и поиска по множеству*/}
            <ItemFilter
                filter={filter}
                setFilter={setFilter}
            />

            {itemError &&
                <h1> ERROR ${itemError}</h1>}

            {isItemsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div>
                : <SellItemsList action={addToCart} items={sortedAndSearchedItems} mainTitle="Items" />
            }

            <Pagination  page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Items;
