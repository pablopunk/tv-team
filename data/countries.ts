const countries: {
  [index: string]: { label: string; teams: Array<OptionType> }
} = {
  spain: {
    label: 'Spain',
    teams: [
      { value: 'real-madrid', label: 'Real Madrid' },
      { value: 'barcelona', label: 'Barcelona' }
    ]
  },
  england: {
    label: 'England',
    teams: [
      { value: 'arsenal', label: 'Arsenal' },
      { value: 'tottenham-hotspur', label: 'Tottenham Hotspur' }
    ]
  }
}

export default countries
