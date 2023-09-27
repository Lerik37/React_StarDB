import React from 'react';
import './item-list.css';
import propTypes from 'prop-types';

const ItemList = (props) => {

     const { data, onItemSelected,  children: renderlabel} = props;

     const items = data.map((item) => {
           const label = renderlabel(item);
           const { id } = item;
           return (
               <li
                   className="list-group-item"
                   key={id}
                   onClick={() => onItemSelected(id)}>
                   {label}
               </li>
           )
       })
        return (
            <div>
                <ul className="item-list list-group">
                    {items}
                </ul>
            </div>
        )
    }
    ItemList.defaultProps = {
    onItemSelected: () => {}
    }
    ItemList.propTypes = {
        onItemSelected: propTypes.func,
        data: propTypes.arrayOf(propTypes.object).isRequired,
        children: propTypes.func.isRequired
    }

export default ItemList;