const acorn = (state = { clicks: 0 }, action) => {
  switch (action.type) {
    case 'BUYING_ACORN':
      return {
        clicks: state.clicks + 1,
      }
    case 'EATING_ACORN':
      if (state.clicks > 0) {
        return {
          clicks: state.clicks - 1,
        }
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default acorn;