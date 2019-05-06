import {SelectrixOption} from 'react-selectrix'

const countries: {
  [index: string]: { label: string; teams: Array<SelectrixOption> }
} = {
  spain: {
    label: 'Spain',
    teams: [
      { key: 'real-madrid', label: 'Real Madrid' },
      { key: 'barcelona', label: 'Barcelona' }
    ]
  },
  england: {
    label: 'England',
    teams: [
      { key: 'arsenal', label: 'Arsenal' },
      { key: 'tottenham-hotspur', label: 'Tottenham Hotspur' }
    ]
  }
}

export default countries
