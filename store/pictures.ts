export type Picture = {
  src: string
  loadingTime: Date
  title: string
}

export const state = () => ({
  list: [] as Picture[],
})

export const mutations = {
  add(state: { list: Picture[] }, picture: Picture) {
    state.list.push(picture)
  },
  remove(state: { list: Picture[] }, picture: Picture) {
    state.list.splice(state.list.indexOf(picture), 1)
  },
}
