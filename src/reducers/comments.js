const initialState = [
  {
    id: 1,
    date: new Date(),
    author: 'Micha',
    text: 'Hello!',
  },
]

export function commentsReducer(state = initialState) {
  return state
}
