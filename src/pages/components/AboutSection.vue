<template>
<div class="section section-about">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">About Us</h2>
            <h3>We are the influencers marketing experts.</h3>
            <h5 class="description">
              At Fanware Today, we develop and execute influencer marketing strategies. Based on your brand goals, we shape the optimal strategy that is right for you. This includes connecting you with the top social media influencers, vloggers and content creators to help you engage your target audiences.
We handle it all: from developing creative concepts to campaign realisation. Ready to see how we can boost your brand? 
            </h5>
            <a
              class="btn btn-primary btn-simple btn-round btn-lg"
              @click="toggleOverlay()"
              >
                Talk to us
              </a>
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
  }
}
</script>