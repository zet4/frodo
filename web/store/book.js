
export const state = () => ({
  list: [],
  current: undefined
})

export const getters = {
  byRoute(state, _, rootState) {
    if (state.current != undefined)
      return state.list.find( book => book.id == state.current )

    if (!rootState.route.name.startsWith("book"))
      return undefined
    if (!rootState.route.params.uuid)
      return undefined
    return state.list.find( book => book.id == rootState.route.params.id )
  }
}

export const mutations = {
  setList(state, books) {
    state.list = books
  },
  setBook(state, newBook) {
    if (!state.list.find( book => book.id == newBook.id))
      state.list.push(newBook)
      state.current = newBook.id
  }
}

export const actions = {
  async GET_LIST({commit}) {
    await this.$axios.get('/books')
      .then((res) => {
        if (res.status === 200) {
          commit('setList', res.data)
        }
      })
  },
  async GET_BOOK({commit}, id) {
    await this.$axios.get('/books/' + id)
      .then((res) => {
        if (res.status === 200) {
          commit('setBook', res.data)
        }
      })
  }
}
