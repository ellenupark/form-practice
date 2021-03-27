import React, { useState } from 'react';

const CommentContainer = (props) => {
    const [comment, setComment] = useState('');
    const inputRef = React.createRef()

    const handleChange = () => {
        const value = inputRef.current.value;
        setComment(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createComment(comment)
        setComment('');
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} ref={inputRef} type='text' value={comment}/>
                <button onClick={handleSubmit} >Submit</button>
            </form>
            <ul>
                {props.comments.map(comment => <li>{comment}</li>)}
            </ul>
        </div>
    );
};

export default CommentContainer;