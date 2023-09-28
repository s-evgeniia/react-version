import React from 'react';
import ItemInBasket from "./ItemInBasket";

const BasketItemList = ({items, title, action}) => {
    return (
        <div >
            <h1 style={{textAlign: "center", padding: "15px"}}>{title}</h1>
            <div className="sell_items_list">
                {items.map(item =>
                    <ItemInBasket
                        action={action}
                        item={item}
                        key={item.id} />
                )}
            </div>
        </div>
    );
};

export default BasketItemList;