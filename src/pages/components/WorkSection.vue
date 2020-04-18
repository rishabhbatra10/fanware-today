<template>
  <div class="section section-work">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Work</h2>
            <div class="row">
              <div class="col-sm justify-content-md-center">
                  <CircleCards :size="size" value="Understanding brand goals and mapping it to right influencer" :bgColor="bgColor"/>
              </div>
              <div class="col-sm justify-content-md-center">
                  <CircleCards :size="size" value="Building brand awareness campaigns from scratch" :bgColor="bgColor" />
              </div>
              <div class="col-sm justify-content-md-center">
                  <CircleCards :size="size" value="Conversion-focused campaigns for mature brands" :bgColor="bgColor" /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import CircleCards from './CircleCards.vue'

export default {
  components: {
    CircleCards
  },
  data: function(){
    return {
      size: 260,
      bgColor: "#2C6975"
    }
  }
}
</script>
<style>
.justify-content-md-center {
  display: flex;
}

@media (min-width: 1200px) {
  .section-work .container, .container-sm, .container-md, .container-lg, .container-xl {
      max-width: 1400px !important;
  }
}
</style>