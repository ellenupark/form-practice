import React, { useState, useEffect } from 'react';
import ListItemExpanded from './ListItemExpanded'
import CommentContainer from './CommentContainer'

const ListItem = (props) => {
    const [item, setItem] = useState({});
    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://api.genshin.dev/characters/${props.item}`)
        .then(resp => resp.json())
        .then(data => setItem(data))
    }, [])

    const createComment = (comment) => {
        setComments([
            ...comments,
            comment
        ])
    }

    return (
        <div className="list-item">
            {item.name}
            {open && <ListItemExpanded item={item} />}
            {open && <CommentContainer createComment={createComment} comments={comments} />}
            <button onClick={() => setOpen(!open)}>{open ? 'Close' : 'Details'}</button>
        </div>
    );
};

export default ListItem;