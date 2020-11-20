export const state = () => ({
  list: [] as File[],
})

export const mutations = {
  add(state: { list: File[] }, picture: File) {
    state.list.push(picture)
  },
  remove(state: { list: File[] }, picture: File) {
    state.list.splice(state.list.indexOf(picture), 1)
  },
}
