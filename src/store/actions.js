export function addVisitedViews({ commit }, view) {
  return commit('ADD_VISITED_VIEWS', view)
}

export function delVisitedViews({ commit, state }, view) {
  return new Promise((resolve) => {
    commit('DEL_VISITED_VIEWS', view)
    resolve([...state.visitedViews])
  })
}

export function delOthersViews({ commit, state }, view) {
  return new Promise((resolve) => {
    commit('DEL_OTHERS_VIEWS', view)
    resolve([...state.visitedViews])
  })
}

export function delAllViews({ commit, state }) {
  return new Promise((resolve) => {
    commit('DEL_ALL_VIEWS')
    resolve([...state.visitedViews])
  })
}
