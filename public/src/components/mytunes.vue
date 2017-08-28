<template>
    <div class="row">
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
                <button @click="removeTrack(song)">Remove from MyTunes</button>
                <button @click="promoteTrack(song)">Promote Track</button>
                <button @click="demoteTrack(song)">Demote Track</button>
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
     removeTrack(song){
          this.$store.dispatch('removeTrack', song)
     },
  promoteTrack(song){
        var songs = this.$store.state.myTunes
        var index = songs.indexOf(song)
        var newIndex = index - 1
        if (newIndex >= 0){
            this.$store.dispatch('promoteTrack', {index, newIndex})
        }
    },
    demoteTrack(song){
        var songs = this.$store.state.myTunes
        var index = songs.indexOf(song)
        var newIndex = index + 1
        if (newIndex < songs.length){
            this.$store.dispatch('promoteTrack', {index, newIndex})
        }
    }
  },
    computed: {
      songs() {
         return this.$store.state.myTunes;
    }
},
}
</script>

<!--Add "scoped" attribute to limit CSS to this component only-->
<style scoped >

</style>