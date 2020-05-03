<template>
  <div>
    <div class="page-header" filter-color="primary">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>
      <div class="container" id="home" style="display: flex; align-items: center;">
        <div class="row" >
          <div class="col-sm">
          <!-- <img class="n-logo" src="img/now-logo.png" alt="" /> -->
            <div class="row">
              <div class="col-sm">
                <h3 class="h2-seo hero-qoute" :style="{color: heroTextColor}">
                  “ True <span style="color: #ffbe00">influence</span> is about leveraging <span style="color: #ff9b30">authenticity</span>. ” </h3>
                <h4 class="h4 hero-text" :style="{color: heroTextColor}">Bring your brand story to life through harnessing the power of authentic connections. </h4>
                <h4 class="h4 hero-text" :style="{color: heroTextColor}"> 
                  Engage with powerful, vernacular influencers and activate target audience through strategic and creative influencers marketing campaigns.
                </h4>
                <n-button 
                 class="btn-hero" 
                 round 
                 size="lg" 
                 @click="toggleFormOverlay('influencer')" 
                 >
                  I am an <strong>Influencer</strong>
                </n-button>
                <a
                  class="btn-hero btn btn-simple btn-round btn-lg"
                  @click="toggleFormOverlay('client')"
                  >
                  I am a <strong>Brand</strong>
                </a>
              </div>
              <!-- <div class="col-sm" style="align-items: center; display: flex;">
                <div class="row hero-justify-center">
                  <div class="col-sm justify-content-md-center">
                      <CircleCards value="Relevant" :size="size" :bgColor="circleBgColor" :color="circlesText" :fontWeight="circlesFontWeight" />
                  </div>
                  <div class="col-sm justify-content-md-center">
                      <CircleCards value="Clever" :size="size" :bgColor="circleBgColor" :color="circlesText" :fontWeight="circlesFontWeight" />
                  </div>
                  <div class="col-sm justify-content-md-center">
                      <CircleCards value="Result oriented" :size="size" :bgColor="circlesText" :color="circleBgColor" :fontWeight="circlesFontWeight" /> 
                  </div>
                </div>
              </div>  -->
            </div>
            <v-overlay :value="overlay" opacity="0.9" z-index="2000" color="#ddd">
              <div class="row" >
                <div class="col-sm">
                  <v-btn
                    icon
                    @click="overlay = false"
                    class="overlay-close-icon"
                    color="#000"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <Forms :isInfluencer="influencer" />
                </div>
              </div>
            </v-overlay>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="main">
      <div class="section section-images">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-images-container">
                <img src="img/hero-image-1.png" alt="" />
              </div>
              <div class="hero-images-container-1">
                <img src="img/hero-image-2.png" alt="" />
              </div>
              <div class="hero-images-container-2">
                <img src="img/hero-image-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <NucleoIconsSection id="influencers" v-on:toggle-micro="() => {microInfluencer = true; this.$route.push({path:'#microInfluencer'})}"/>
    <div class="row" style="display: flex; justify-content: center;">
        <v-content class="collage-img">
          <v-img src="img/collage.jpg" />
        </v-content>
      </div>
      <div class="row btn-learn-more justify-content-md-center">
        <a
          class="btn btn-primary btn-simple btn-round btn-lg"
          @click="() => {microInfluencer = true; this.$route.push({path:'#microInfluencer'})}"
          >
            Learn more
          </a>
      </div>
    <MicroInfluencerSection id="micro-influencers" v-if="microInfluencer"/>
    <WorkSection id="work" />
    <SlideGroupSection id="case-studies" />
    <ChannelSection id="channels"/>
    <AboutSection id="about" v-on:toggle-overlay="toggleFormOverlay('influencer')" />
  </div>
</template>
<script>
import { Parallax } from '@/components';
import AboutSection from './components/AboutSection.vue';
import BasicElements from './components/BasicElementsSection';
import Navigation from './components/Navigation';
import TabsSection from './components/Tabs';
import ProgressPagination from './components/ProgressPagination';
import Notifications from './components/Notifications';
import Typography from './components/Typography';
import JavascriptComponents from './components/JavascriptComponents';
import CarouselSection from './components/CarouselSection';
import NucleoIconsSection from './components/NucleoIconsSection';
import Forms from './components/Forms.vue'
import SignupForm from './components/SignupForm';
import ExamplesSection from './components/ExamplesSection';
import DownloadSection from './components/DownloadSection';
import SlideGroupSection from './components/SlideGroupSection';
import MicroInfluencerSection from './components/MicroInfluencerSection.vue';
import WorkSection from './components/WorkSection.vue';
import ContactSection from './components/ContactSection.vue';
import CircleCards from './components/CircleCards.vue';
import CaseStudies from './components/CaseStudies.vue';
import ChannelSection from './components/ChannelSection.vue';
import { FormGroupInput, FormGroupTextArea, Button, Tabs, TabPane } from '@/components';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    AboutSection,
    BasicElements,
    Navigation,
    TabsSection,
    ProgressPagination,
    Notifications,
    Typography,
    JavascriptComponents,
    CarouselSection,
    NucleoIconsSection,
    SignupForm,
    ExamplesSection,
    DownloadSection,
    SlideGroupSection,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [FormGroupTextArea.name]: FormGroupTextArea,
    WorkSection,
    MicroInfluencerSection,
    ContactSection,
    CircleCards,
    CaseStudies,
    Forms,
    ChannelSection
  },
  data: function(vm) {
    return {
      overlay: false,
      clickOutsideArgs: { closeConditional: vm.closeConditional },
      size: 170,
      microInfluencer: false, 
      heroTextColor: "#2C6975",
      circleBgColor: "#2C6975",
      circlesText: "#ffb236",
      circlesFontWeight: 700,
      influencer: true
    }
  },
  methods: {
    closeConditional () {
      console.log('maybe clicked outside')
      return true
    },
    toggleFormOverlay: function(status) {
      this.overlay = true;
      if (status === 'influencer') {
        this.influencer = true;
      }
      else if (status === 'client') {
        this.influencer = false;
      }
      console.log("Toggle Form Overlay ")
    },
  }
};
</script>
<style>
.v-overlay{
  align-items: center;
  border-radius: inherit;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), z-index 1ms;
}

.v-overlay__content {
  position: relative;
}

.v-overlay__scrim {
  border-radius: inherit;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: inherit;
  width: 100%;
  will-change: opacity;
}

.v-overlay--absolute {
  position: absolute
}

.v-overlay--active {
  pointer-events: auto
}

.hero-justify-center {
 justify-content: center;
}

.hero-qoute {
  font-weight: bold;
  font-size: 45px;
  font-family: Parisienne, Georgia, 'Times New Roman', Times, serif;
}

.btn-lg {
  margin: 5px !important;
}
.btn-hero.btn-default {
  background-color: #2C6975 !important;
  color: #ffffff !important;
}
.btn-hero.btn-simple {
  color: #2C6975 !important;
  border-color: #2C6975 !important;
}

.hero-text {
  font-weight:500 !important;
}
@media(max-width: 1000px) {
  .hero-justify-center .col-sm {
    display: contents;
  }
  .page-header{
    min-height: 1200px !important;
  }
}

.h1-seo {
  color: #2C6975 !important;
}
.overlay-close-icon {
  margin: 0px 0px -190px -400px !important;
  z-index: 2;
}
.justify-content-md-center {
  display: flex;
}

#home span {
  text-shadow: 0px 0px 5px #ffffff;
}
</style>
