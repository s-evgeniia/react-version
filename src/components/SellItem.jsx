import React from 'react';
import MyButton from "./UI/button/MyButton";

const SellItem = (props) => {

    return (
            <div className="item__content">
                <strong>{props.item.id}. {props.item.title}</strong>
                <img src={props.item.src} alt={props.item.title} />
                <div>
                    {props.item.body} <br />
                    size: {props.item.size} <br />
                    colour: {props.item.color}
                </div>
                <div className="item__btn">
                    <b>{props.item.price} €</b>

                    {/*Функция удаления товара со страницы*/}
                    <MyButton onClick={() => props.remove(props.item)}>
                        Deleted
                    </MyButton>
                </div>
            </div>
    );
};

export default SellItem;