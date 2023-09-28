import React from 'react';
import SellItem from "./SellItem";

const SellItemsList = ({items, mainTitle, action}) => {
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
            <h1 style={{textAlign: "center", paddingBottom: "15px"}}>
                {mainTitle}
            </h1>
                <div className="sell_items_list">
                    {items.map((item, index) =>
                            <SellItem
                                action={action}
                                number={index + 1}
                                item={item}
                                key={item.id}/>
                    )}
                </div>

        </div>
    );
};

export default SellItemsList;

{/* Кнопка только для главной страницы*/}
/*<div className="center_btn">
    <MyButton>View more</MyButton>
</div>*/