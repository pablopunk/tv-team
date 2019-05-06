import React from 'react'

export type MatchType = {
  game: string
  time: string
  date: string
  competition: string
  tvs: Array<string>
  played: boolean
  live: boolean
}

interface IProps {
  match: MatchType
}

export default class extends React.Component<IProps> {
  render() {
    const { game, time, date } = this.props.match
    return (
      <div>
        <h1>{game}</h1>
        <h2>
          {date} - {time}
        </h2>
      </div>
    )
  }
}
