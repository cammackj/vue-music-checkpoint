<template>
  <div class="SearchForm">
    <div class="row">
      <div class="col-xs-12">
        <form @submit.prevent="searchResults()">
          <div class="col md12">
            <input type="text" v-model='query'>
          </div>
          <div class="col md2">
            <button type="submit" class="btn"> search</button>
          </div>
        </form>
      </div>
      <div v-for="song in songs">
            <div class="col-xs-12">
                <h3>{{song.artistName}}</h3>
                <img height="100px" width="100px" class="img-responsive" style="margin:0 auto;" :src="song.artworkUrl100"></img>
                <div>{{song.trackName}}</div>
                <div>Album title: {{song.collectionName}}</div>
                <div>Price: {{song.collectionPrice}}</div>
                <audio controls id="audio-box-song.trackId">
                    <source :src=song.previewUrl type="audio/mp4">
                </audio>
                <button @click="addToMyTunes(song)">Add to MyTunes</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import app from '../App';

export default {
  data() {
    return {
      query: '',
      searchOffset: 0,
      lastQuery: ''
    }
  },
  methods: {
    searchResults() {
      this.searchOffset = 0;
      this.lastQuery = this.query;
      this.$store.dispatch('getMusicByArtist', {query: this.query, offset: this.searchOffset})
    },
    addToMyTunes(song){
        var songs = this.$store.state.myTunes
        var index = songs.indexOf(song)
        if(index == -1){
        this.$store.dispatch('addToMyTunes', song)
        }
    }
  },
    computed: {
       songs() {
         return this.$store.state.results;
      }
    },
}
</script>

<!--Add "scoped" attribute to limit CSS to this component only-->
<style scoped >

</style>
