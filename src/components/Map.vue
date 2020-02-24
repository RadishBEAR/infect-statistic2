<template>
  <div id="map"></div>
</template>

<script>
import {init} from '../comm/js/MyEcharts/map.js'
export default {
  mounted () {
    init('map')
  }
}
</script>
<style scoped>
  #map{
    width:1000px;
    height:800px;
    margin: 150px auto;
    border:1px solid #ddd;
  }
</style>
