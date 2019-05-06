import React from 'react';
import countries from '../data/countries';
import * as api from '../data/api';

interface IState {
  country?: string;
  matches?: Array<any>;
  loading: boolean;
}

export default class extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)

    this.state = {loading: false}
  }
  countrySelected({target}: any) {
    if (target.value) {
      this.setState({country: target.value})
    }
  }
  teamSelected({target}: any) {
    if (target.value) {
      this.setState({loading: true})
      api.get(this.state.country as string, target.value).then(({matches}) => {
        this.setState({matches, loading: false})
      })
    }
  }
  render() {
    const {country, matches = [], loading} = this.state
    let teams: Array<any> = []

    if (country) {
      const countryObject = countries.find(c => c.key === country)
      if (countryObject) {
        teams = countryObject.teams
      }
    }

    return (
      <div>
        <section>
          <select onChange={ev => this.countrySelected(ev)}>
            <option value="">Select country...</option>
            {countries.map(c => (
              <option key={'key' + c.label} value={c.key}>
                {c.label}
              </option>
            ))}
          </select>
          {teams.length > 0 && (
            <select onChange={ev => this.teamSelected(ev)}>
              <option value="">Select team...</option>
              {teams.map(c => (
                <option key={'key' + c.label} value={c.key}>
                  {c.label}
                </option>
              ))}
            </select>
          )}
          <div>{loading ? 'loading...' : ''}</div>
          <div>
            {matches.map(match => (
              <article key={'match-' + match.game}>
                <h2>{match.game}</h2>
                <h3>
                  {match.date} - {match.time}
                </h3>
              </article>
            ))}
          </div>
        </section>
        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          select,
          option {
            border: none;
            color: royalblue;
            outline: none;
            height: 3rem;
            width: 13rem;
            margin: 1rem;
            font-size: 1.2rem;
          }
        `}</style>
      </div>
    )
  }
}
