<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <mytunes class="mytunes"></mytunes>
    <itunes class="itunes"></itunes>
  </div>
</template>

<script>
import itunes from './components/itunes'
import mytunes from './components/mytunes'

export default {
  name: 'App',
  components: {
    itunes,
    mytunes 
  }
}
</script>

<style>
.mytunes{
  display: inline-block;
  min-height: 500px;
  min-width: 50%;
  background: green;
}

.itunes{
  display: inline-block;
  background: red;
  min-height: 500px;
  min-width: 45%;
}
</style>
