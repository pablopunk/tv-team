import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import Match from '../components/Match'
import countriesData from '../data/countries'
import { get as getMatches } from '../data/api'

const SelectComponent = styled.article`
  width: 200px;
`

interface IState {
  teams?: Array<OptionType>
  loading: boolean
  matches: Array<any>
}

const countries = Object.keys(countriesData).map((country: string) => ({
  value: country,
  label: countriesData[country].label
}))

const isString = (x: any): x is string => typeof x === 'string'

export default class extends React.Component<any, IState> {
  selectedCountry?: string

  constructor(props: any) {
    super(props)

    this.state = { loading: false, matches: [] }
  }
  selectCountry(country: string) {
    this.selectedCountry = country
    const { teams } = countriesData[country]

    this.setState({ teams })
  }
  onCountryChange(
    { value }: OptionType | any,
    { action }: { action: ActionTypes }
  ) {
    if (action === 'select-option' && value) {
      this.selectCountry(value)
    }
  }
  onTeamChange(
    { value }: OptionType | any,
    { action }: { action: ActionTypes }
  ) {
    if (action === 'select-option' && value) {
      this.setState({ loading: true })
      if (isString(this.selectedCountry)) {
        getMatches(this.selectedCountry, value).then(({ matches }) =>
          this.setState({ loading: false, matches })
        )
      }
    }
  }
  render() {
    const { teams = [], matches = [] } = this.state || {}

    const nextMatches = matches.filter(m => !m.played)
    let lastPlayed = {}

    matches.map(m => {
      if (m.played) {
        lastPlayed = m
      }
    })

    const nextPlayedAndLastGame = [lastPlayed, ...nextMatches]

    return (
      <div>
        <SelectComponent>
          <Select
            options={countries}
            placeholder="Select a country"
            onChange={this.onCountryChange.bind(this)}
          />
        </SelectComponent>
        {teams.length > 0 && (
          <SelectComponent>
            <Select
              options={teams}
              placeholder="Select a team"
              onChange={this.onTeamChange.bind(this)}
            />
          </SelectComponent>
        )}
        {this.state.loading ? (
          <section className="loading">
            <i className="fas fa-sync fa-spin" />
          </section>
        ) : (
          nextPlayedAndLastGame.map(match => <Match match={match} />)
        )}
      </div>
    )
  }
}
