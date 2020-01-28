import React from 'react';
import { useEffect, useState } from 'react';

export default function Comments() {
    const [ comment, setComment ] = useState({})
    const [ lastComment, setLastComment ] = useState("")
  
    useEffect(() => {
      const fetchComment = () =>
        fetch('https://jsonplaceholder.typicode.com/posts/3')
          .then(res => res.json())
          .then(data => {
            if (data.title === lastComment) return fetchComment()
            else setComment(data)
          })
       fetchComment() 
    })
  
    return(
      <div>
        <p className="title">{comment.title}</p>
        <button onClick={() => setLastComment(comment.title)}>Like</button>
      </div>
    )
  }
