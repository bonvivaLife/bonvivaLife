export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'


export const increment = () => ({
    type: INCREMENT
  })

export const incrementAsync = () => dispatch => {
  return setTimeout(() => {
      dispatch(increment())
    }, 500)
  }

export const decrement = () => ({
      type: DECREMENT
  })

export const decrementAsync = () => dispatch => {
  setTimeout(() => {
    return dispatch(decrement())
  }, 500)
}