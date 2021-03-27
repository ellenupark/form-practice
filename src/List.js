import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';

const List = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch('https://api.genshin.dev/characters')
        .then(resp => resp.json())
        .then(data => setItems(data))
    }, [])

    return (
        <div className="list-container">
            {items.map(item => <ListItem key={item} item={item} />)}
        </div>
    );
};

export default List;