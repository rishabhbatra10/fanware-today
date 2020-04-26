<template>
  <div class="section section-nucleo-icons">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <h2 class="title">Influencers</h2>
          <h5 class="description">
            For every brand, there’s a perfect influencer and our data backed matching tool knows where to find them. Whether that means identifying influencers in niche segments or securing long-term ambassadors. We connect you with influencers who get people talking, and acting.
          </h5>
          <!-- <div class="nucleo-container">
                    <img v-lazy="'assetsimg/nucleo.svg'" alt="">
                </div> -->
          <!-- <a
            href="https://demos.creative-tim.com/now-ui-kit/nucleo-icons.html"
            class="btn btn-primary btn-round btn-lg"
            target="_blank"
            >View Demo Icons</a
          >
           -->
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="icons-container">
            <i class="fas fa-tshirt"></i>
            <!-- <i class="now-ui-icons ui-1_send"></i> -->
            <i class="now-ui-icons clothes_tie-bow"></i>
            <i class="fas fa-umbrella-beach"></i>
            <!-- <i class="now-ui-icons ui-2_like"></i> -->
            <i class="fas fa-palette"></i>
            <!-- <i class="now-ui-icons transportation_air-baloon"></i> -->
            <i class="fas fa-microchip"></i>
            <!-- <i class="now-ui-icons text_bold"></i> -->
            <i class="fas fa-hat-cowboy-side"></i>
            <i class="fas fa-hand-sparkles"></i>
            <!-- <i class="now-ui-icons tech_headphones"></i> -->
            <!-- <i class="now-ui-icons emoticons_satisfied"></i> -->
            <i class="fas fa-info-circle"></i>
            <!-- <i class="now-ui-icons shopping_cart-simple"></i> -->
            <i class="fas fa-rocket"></i>
            <!-- <i class="now-ui-icons objects_spaceship solid"></i> -->
            <i class="fas fa-headphones-alt"></i>
            <!-- <i class="now-ui-icons media-2_note-03"></i> -->
            <i class="fas fa-heart"></i>
            <!-- <i class="now-ui-icons ui-2_favourite-28"></i> -->
            <i class="fas fa-stopwatch"></i>
            <!-- <i class="now-ui-icons design_palette"></i> -->
            <i class="fas fa-map-marker-alt"></i>
            <!-- <i class="now-ui-icons location_pin"></i> -->
            <i class="fas fa-female"></i>
            <!-- <i class="now-ui-icons objects_key-25"></i> -->
            <i class="fas fa-globe-asia"></i>
            <!-- <i class="now-ui-icons travel_istanbul"></i> -->
          </div>
        </div>
      </div>
      <div class="row">
        <v-content class="collage-img">
          <v-img src="img/collage.jpg" max-width="1000"/>
        </v-content>
      </div>
      <div class="row btn-learn-more">
        <a
          class="btn btn-primary btn-simple btn-round btn-lg"
          @click="toggleMicro()"
          >
            Learn more
          </a>
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
    toggleMicro: function () {
      console.log("triggering overlay...")
      this.$emit("toggle-micro")
    }
  }
};
</script>
<style>
.btn-learn-more {  
  display: flex;
  justify-content: center;
}
</style>
