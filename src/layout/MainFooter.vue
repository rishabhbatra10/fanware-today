<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
    id="contact"
  >
  <div class="container">
    <div class="row">
      <div class="col-sm">
          <span style="font-size: 17px">Contact</span>
          <br/>
          <v-icon class="mdi mdi-whatsapp" color="#fff" small></v-icon> +91-79857-73397 <br/>
          <v-icon class="mdi mdi-gmail" color="#fff" small></v-icon> <a href="mailto:hello@fanwaretoday.in?Subject=Hello%20to%20Fanware"> hello@fanwaretoday.in</a>

      </div>
      <div class="col-sm">
        <span style="font-size: 17px">About</span> <br/>
          <a href="#influencers" target="">Influencers</a> <br/>
          <a href="#work" target="">Brands and Agencies</a> <br/>
          <a href="#about" target="">Work with us</a>
      </div>
      <div class="col-sm">
        <span style="font-size: 17px">Help</span> <br/>
        <a href="" target="" style="font-size: 12px">Brand T&Cs</a> <br/>
        <a href="" target="" style="font-size: 12px">Creator T&Cs</a> <br/>
        <a href="" target="" style="font-size: 12px">Privacy</a>
      </div>
    </div>
  </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
