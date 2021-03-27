import React from 'react';

const ListItemExpanded = (props) => {
    return (
        <ul>
            <li>Affiliation: {props.item.affiliation}</li>
            <li>Constellation: {props.item.constellation}</li>
            <li>Weapon: {props.item.weapon}</li>
            <li>Description: {props.item.description}</li>
        </ul>
    )
};

export default ListItemExpanded;