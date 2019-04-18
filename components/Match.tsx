import React from 'react'
import styled from 'styled-components'

const StyledArticle = styled.article`
  background-color: hotpink;
`

interface IProps {
  match: Match
}

export default class extends React.Component<IProps, {}> {
  render() {
    const { match } = this.props

    console.log(match)

    return (
      <StyledArticle>
        <div>{match.game}</div>
        <div>{match.time}</div>
        {match.tvs.map((tv, i) => (
          <div key={`game-${i}`}>{tv}</div>
        ))}
      </StyledArticle>
    )
  }
}
