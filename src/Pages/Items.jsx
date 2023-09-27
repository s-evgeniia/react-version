import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import SellItemsList from "../components/SellItemsList";
import AddItemForm from "../components/AddItemForm";
import ItemFilter from "../components/ItemFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {useItems} from "../hooks/useItems";
import ItemService from "../API/ItemService";
import Loader from "../Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Items() {
    //Создание списка товаров с атрибутами размера, цвета, названия, описания и цены
    const [items, setItems] = useState([])
    //{"id": 1, "title": 'Jacket', "src": '#', "body": 'Item description', "size": '42', "color": 'red', "price": '100'},
    //{"id": 2, "title": 'T-shirt', "src": '#', "body": 'Item description', "size": '52', "color": 'white', "price": '450'}])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedItems = useItems(items, filter.sort, filter.query);

    const [fetchItems, isItemsLoading, itemError] = useFetching(async (limit, page) => {
        const response = await ItemService.getAll(limit, page);
        setItems(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchItems(limit, page)
    }, [] )

    //Реализация добавления новых товаров в список
    const createItem = (newItem) => {
        setItems([...items, newItem])
        setModal(false)
    }

    //Удаление товара (например из корзины)
    const removeItem = (item) => {
        setItems(items.filter(i => i.id !== item.id))
    }

    //Реализация переключения страниц
    const changePage = (page) => {
        setPage(page)
        fetchItems(limit, page)
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>Add new item</MyButton>

            {/*Реализация модального окна*/}
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                {/*Реализация добавления новых товаров в список*/}
                <AddItemForm create={createItem}/>
            </MyModal>

            {/*Реализация сортировки и поиска по множеству*/}
            <ItemFilter
                filter={filter}
                setFilter={setFilter}
            />

            {itemError &&
                <h1> ERROR ${itemError}</h1>}

            <Pagination  page={page} changePage={changePage} totalPages={totalPages}/>

            {isItemsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div>
                : <SellItemsList remove={removeItem} items={sortedAndSearchedItems} mainTitle="Women's items" />
            }

            <Pagination  page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Items;
