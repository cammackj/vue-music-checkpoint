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