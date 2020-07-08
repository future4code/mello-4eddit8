import React from 'react'
import {
  Main,
  CardContainer
} from './style'

function PostsCard(props) {

  return(
    <Main>
      <CardContainer>
        <h4>{props.user}</h4>
        <p>{props.text}</p>
        <div>
          <p>{props.votesCount}</p>
          <p>{props.commentsCount}</p>
        </div>
      </CardContainer>
    </Main>
  )
}

export default PostsCard