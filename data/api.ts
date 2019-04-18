import fetch from 'isomorphic-fetch'

const API = 'https://soccer.now.sh'

export async function get(country: string, team: string): Promise<any> {
  return fetch(`${API}/${country}/${team}`).then(res => res.json())
}
