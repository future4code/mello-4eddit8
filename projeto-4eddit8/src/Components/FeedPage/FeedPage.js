import React, {useState, useEffect} from 'react'
import { StylesProvider } from '@material-ui/core/styles';
import PostsCard from '../PostsCard/PostsCard'
import axios from 'axios'
import {
  Main,
  InputNewPost,
  ButtonNewPost
} from './style'

function PostsPage() {
  const [postList, setPostList] = useState([])

  useEffect(()=> {
    const userToken = localStorage.getItem("token");
    console.log(userToken)
    getPosts()
  }, [])

  function getPosts() {
    const userToken = localStorage.getItem("token");
    const headers = {
      Authorization: userToken
    }
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', {headers})
      .then((response) => {
        setPostList(response.data.posts)
      })
      .catch((error) => {
        window.alert(error)
      })
  }

  function upVote() {
    window.alert('upvote!!')
  }

  function downVote() {
    window.alert('downvote!!')
  }

  return (
    <StylesProvider injectFirst>
      <Main>
        <h2>Página de Feed</h2>
        <form>
          <InputNewPost 
            placeholder='quais as novidades?' 
            variant='outlined' 
            multiline
            rows={3}
          />
          <ButtonNewPost 
            color='primary' 
            variant='outlined'>
            Postar
          </ButtonNewPost>
        </form>
        {postList.length === 0 ? <p>Carregando Posts...</p> : postList.map((post) => {
          return (
          <section>
            <PostsCard 
              upVote={upVote}
              downVote={downVote}
              user={post.username}
              text={post.text}
              commentsCount={post.commentsCount}
              votesCount={post.votesCount}
            />
          </section>)
        })}
      </Main>
    </StylesProvider>
  )
}

export default PostsPage
