import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: {
    searchResults(state, results){
      state.results = results;
    },
    saveTunes(state, song){
      state.myTunes.push(song);
    },
    removeTunes(state, song){
      var index = state.myTunes.indexOf(song);
      state.myTunes.splice(index, 1);
    },
    promoteSong(state, payload){
      let temp = state.myTunes[payload.index];
      vue.set(state.myTunes, payload.index, state.myTunes[payload.newIndex]);
      vue.set(state.myTunes, payload.newIndex, temp);
    },
  },
  actions: {
    getMusicByArtist({commit, dispatch}, data) {
      var artist = data.query
      console.log(artist)
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data=>{
        var songs = JSON.parse(data);
        commit('searchResults', songs.results);
      })
    },
    // getMusicByArtist({commit, dispatch}, artist){
        // un-comment when api is moved to the server side
    // },
    searchResults({commit, dispatch}){
      
    },
    getMyTunes({commit, dispatch}){
      //this should send a get request to your server to return the list of saved tunes
    },
    addToMyTunes({commit, dispatch}, song){
      commit('saveTunes', song);
      //this will post to your server adding a new track to your tunes
    },
    removeTrack({commit, dispatch}, song){
      commit('removeTunes', song);
      //Removes track from the database with delete
    },
    promoteTrack({commit, dispatch}, payload){
      commit('promoteSong', payload);
      //this should increase the position / upvotes and downvotes on the track
    },
  }
})

export default store
