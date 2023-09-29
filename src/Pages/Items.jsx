import React, {useEffect, useState, useRef} from 'react';
import '../styles/App.css';
import SellItemsList from "../components/SellItemsList";
import ItemFilter from "../components/ItemFilter";
import {useItems} from "../hooks/useItems";
import ItemService from "../API/ItemService";
import Loader from "../Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Items() {
    //Создание списка товаров с атрибутами размера, цвета, названия, описания и цены
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedItems = useItems(items, filter.sort, filter.query);
    const itemsToB = [];
    const lastElement = useRef()

    const [fetchItems, isItemsLoading, itemError] = useFetching(async (limit, page) => {
        const response = await ItemService.getAll(limit, page);
        setItems([...items, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isItemsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchItems(limit, page)
    }, [page, limit] )

    //Добавление товара в корзину
    const addToCart = (item) => {
        itemsToB.push(item)
        console.log(itemsToB )
    }

    //Реализация переключения страниц
    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">

            {/*Реализация сортировки и поиска по множеству*/}
            <ItemFilter
                filter={filter}
                setFilter={setFilter}
            />

            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Number of items on the page"
                option={[
                    {value: 10, name: '10'},
                    {value: 20, name: '20'},
                    {value: 50, name: '50'},
                    {value: -1, name: 'Show all'},
                ]}
            />

            {itemError &&
                <h1> ERROR ${itemError}</h1>}

            <SellItemsList action={addToCart} items={sortedAndSearchedItems} mainTitle="Items" />

            <div ref={lastElement} style={{height: 20, background: 'red'}}/>

            {isItemsLoading && <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div>}
            <Pagination  page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Items;
