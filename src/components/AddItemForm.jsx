import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const AddItemForm = ({create}) => {
    const [item, setItem] = useState({title: '', description: ''})

    const addNewItem = (e) => {
        e.preventDefault()
        const newItem = {
            ...item, id: Date.now()
        }
        create(newItem)
        setItem({title: '', description: ''})
    }

    return (
        <form>
            <MyInput
                value={item.title}
                onChange={e => setItem({...item, title: e.target.value})}
                type="text"
                placeholder="Title of Item"/>
            <MyInput
                value={item.description}
                onChange={e => setItem({...item, description: e.target.value})}
                type="text"
                placeholder="Item description"/>
            <MyButton onClick={addNewItem}>Create a sell item</MyButton>
        </form>
    );
};

export default AddItemForm;