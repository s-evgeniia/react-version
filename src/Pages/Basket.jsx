import React, {useState} from 'react';
import '../styles/App.css';
import BasketItemList from "../components/BasketItemList";

const Basket = () => {
    //Создание списка товаров с атрибутами размера, цвета, названия, описания и цены
    const [itemsB, setItemsB] = useState([
        {"id": 1, "title": 'Jacket', "src": '#', "body": 'Item description', "size": '42', "color": 'red', "price": '100'},
        {"id": 2, "title": 'T-shirt', "src": '#', "body": 'Item description', "size": '52', "color": 'white', "price": '450'}
    ])

    const removeItem = (item) => {
        setItemsB(itemsB.filter(i => i.id !== item.id))
    }

    return (
        <div className="App">
            <BasketItemList action={removeItem}  items={itemsB} title="Items in your basket"/>
        </div>
    );
}

export default Basket;