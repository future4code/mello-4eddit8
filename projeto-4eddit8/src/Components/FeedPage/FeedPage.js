import React from 'react'
import PostsCard from '../PostsCard/PostsCard'

function PostsPage() {
  const newPost = {
    yuzo: 'Paulo Aguiar',
    text: 'Este é um novo post',
    votes: 2,
    numberOfComments: 3
  }

  return (
    <main>
      <h2>Página de Feed</h2>
      <PostsCard 
        user={newPost.yuzo}
        text={newPost.text}
        commentsCount={newPost.numberOfComments}
        votesCount={newPost.votes}
      />
    </main>
  )
}

export default PostsPage
