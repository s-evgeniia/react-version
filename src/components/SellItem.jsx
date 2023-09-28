import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const SellItem = (props) => {
    const router = useNavigate()
    console.log(router)

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
                    <MyButton onClick={() => router(`/items/${props.item.id}`)}>
                        View more
                    </MyButton>
                    <MyButton onClick={() => props.action(props.item)}>
                        Add to cart
                    </MyButton>
                </div>
            </div>
    );
};

export default SellItem;