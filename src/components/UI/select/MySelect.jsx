import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({option, defaultValue, value, onChange}) => {
    return (
        <select className={classes.MySorted}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled={true} value="">{defaultValue}</option>
            {option.map(option =>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
            )}
        </select>
    );
};

export default MySelect;