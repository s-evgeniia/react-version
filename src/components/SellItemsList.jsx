import React from 'react';
import SellItem from "./SellItem";
import MyButton from "./UI/button/MyButton";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import nodeRef from "react"

const SellItemsList = ({items, mainTitle, remove}) => {
    //Если все товары удалить, то высвечивается надпись "Your basket is empty!"
    if (!items.length) {
        return (
            <h2 style={{textAlign: 'center', marginTop: '10px'}}>
                Your basket is empty!
            </h2>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {mainTitle}
            </h1>
                <div className="sell_items_list">
                    {items.map((item, index) =>
                            <SellItem
                                remove={remove}
                                number={index + 1}
                                item={item}
                                key={item.id}/>
                    )}
                </div>
                {/* Кнопка только для главной страницы*/}
                <div className="center_btn">
                    <MyButton>View more</MyButton>
                </div>
        </div>
    );
};

export default SellItemsList;