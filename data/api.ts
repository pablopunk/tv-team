import fetch from 'isomorphic-fetch'

const API = 'https://soccer.now.sh'
const query = '?timezone=Europe/Madrid'

export async function get(country: string, team: string): Promise<any> {
  return fetch(`${API}/${country}/${team}${query}`).then((res: any) => res.json())
}
