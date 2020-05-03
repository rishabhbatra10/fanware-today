<template>
<div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Channels</h2>
            <div class="row channels">
              <div class="col">
                <v-icon class="mdi mdi-facebook" color="rgb(66, 103, 178)"  x-large></v-icon>
              </div>
              <div class="col">
                <v-img src="img/social/instagram.svg" width="40" style="margin: auto"> </v-img>
              </div>
              <div class="col">
                <v-icon class="mdi mdi-linkedin" color="rgb(40, 103, 178)" x-large></v-icon>
              </div>
              <div class="col">
                <v-icon class="mdi mdi-telegram" color="rgb(0, 136, 204)" x-large></v-icon>
              </div>
              <div class="col">
                <v-icon class="mdi mdi-twitter" color="rgb(8, 160, 233)" x-large></v-icon>
              </div>
              <div class="col">
                <v-icon class="mdi mdi-youtube" color="rgb(255, 0, 0)" x-large></v-icon>
              </div>
              <div class="col">
                <v-img class="tiktok-logo" src="img/social/tiktok.png" width="40"></v-img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { Button } from '@/components';

export default {
  components: {
    [Button.name]: Button,
  },
  methods: {
    toggleOverlay: function () {
      console.log("triggering overlay...")
      this.$emit("toggle-overlay")
    }
  },
  data: function() {
    return {
      images: [
        {src: "img/social/facebook.png", width: "100"},
        {src: "img/social/instagram.jpg", width: "100"},
        {src: "img/social/linkedin.png", width: "50"},
        {src: "img/social/telegram.jpg", width: "50"},
        {src: "img/social/tiktok.png", width: "50"},
        {src: "img/social/twitter.png", width: "50"},
        {src: "img/social/youtube.png", width: "50"}
      ]
    }
  }
}
</script>
<style>
.channels .col {
  margin: auto;
}

.tiktok-logo {
  border-radius: 10px;
}
</style>