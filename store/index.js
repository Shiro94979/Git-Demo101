export const state = () => ({
  drawer: false,
})

export const mutations = {
  set_drawer(state, newVAl){
    state.drawer = newVAl
  }
}
