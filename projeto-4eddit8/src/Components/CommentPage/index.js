import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

//060ArFua9saK6pXR7xfO

function CommentPage({
    match: {
      params: { id },
    },
  }) {

  const [post, setPost] = useState({})
  const [comments, setComments] = useState([0])
  const [comment, setComment] = useState('')

  useEffect(() => {
    const userToken = localStorage.getItem("token")
    const headers = {
      Authorization: userToken
    }
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`, {headers})
    .then((response) => {
      console.log(response);
      setPost(response.data.post);
      console.log(response.data.post.comments);
      setComments(response.data.post.comments);
    }) 
    .catch((error) => {
      console.log(error)
    })
  }, []);

  function GetPost(){
    return post && <div>
      <div>
        <h4>{post.username}</h4>
        <h4>{post.title}</h4>
        <p>{post.text}</p>
        <p>{post.userVoteDirection}</p>
        <p>{post.votesCount}</p>
      </div>
    </div>
  }
  
  function GetComments(){
    return comments.map(comment => {
      return <div>
        <h5>{comment.username}</h5>
        <p>{comment.text}</p>
        <p>{comment.votesCount}</p>
      </div>
    })
  }
  
  return (
    <main>
      {GetPost()}
      <div>
        <input type='text' placeholder='Escreva seu comentario' value={comment} onCHange={e => setComment(e.target.value)}></input>
        <button>Enviar comentario</button> 
      </div>
      {GetComments()}
    </main>
    )
  }
  
  export default CommentPage
  