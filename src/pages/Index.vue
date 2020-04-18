<template>
  <div>
    <div class="page-header" filter-color="primary">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>
      <div class="container" id="home" style="display: flex; align-items: center;">
        <div class="row" style="margin-top: 20px;">
          <div class="col-sm">
          <!-- <img class="n-logo" src="img/now-logo.png" alt="" /> -->
            <div class="row">
              <div class="col-sm">
                <h3 class="h2-seo hero-qoute" :style="{color: heroTextColor}">“ True influence is about leveraging authenticity. ” </h3>
                <h4 class="h4 hero-text" :style="{color: heroTextColor}">Bring your brand story to life through harnessing the power of authentic connections. </h4>
                <h4 class="h4 hero-text" :style="{color: heroTextColor}"> 
                  Engage with powerful, vernacular influencers and activate target audience through strategic and creative influencers marketing campaigns.
                </h4>
              </div>
              <div class="col-sm">
                <div class="row hero-justify-center">
                  <div class="col-sm justify-content-md-center">
                      <CircleCards value="Relevant" :size="size" bgColor="#FDCC0D" />
                  </div>
                  <div class="col-sm justify-content-md-center">
                      <CircleCards value="Clever" :size="size" bgColor="#FDCC0D" />
                  </div>
                  <div class="col-sm justify-content-md-center">
                      <CircleCards value="Result oriented" :size="size" bgColor="#FDCC0D" /> 
                  </div>
                </div>
              </div>
            </div>
            <n-button type="primary" round size="lg" @click="overlay = true" >Get Started</n-button>
            <v-overlay :value="overlay" v-click-outside:[clickOutsideArgs]="toggleFormOverlay()" opacity="0.9" z-index="2000">
              <div class="row" >
                <div class="col-sm">
                  <v-btn
                    icon
                    @click="overlay = false"
                    class="overlay-close-icon"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <Forms />
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
    <NucleoIconsSection id="influencers" v-on:toggle-micro="microInfluencer = true" />
    
    <MicroInfluencerSection id="micro-influencers" v-if="microInfluencer"/>
    <WorkSection id="work" />
    <!-- <CaseStudies id="case-studies" /> -->
    <SlideGroupSection id="case-studies" />
    <AboutSection id="about" v-on:toggle-overlay="overlay = true" />
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
    Forms
  },
  data: function(vm) {
    return {
      overlay: false,
      clickOutsideArgs: { closeConditional: vm.closeConditional },
      size: 170,
      microInfluencer: false, 
      heroTextColor: "#0b6623"
    }
  },
  methods: {
    closeConditional () {
      console.log('maybe clicked outside')
      return true
    },
    toggleFormOverlay: function() {
      console.log("Toggle Form Overlay ")
    }
  }
};
</script>
<style>

.v-overlay--absolute {
  position: absolute
}

.v-overlay--active {
  pointer-events: auto
}

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

.v-overlay__content {
  position: relative;
}

.hero-justify-center {
 justify-content: center;
}

.hero-qoute {
  font-weight: bold;
  font-size: 45px;
  font-family: Parisienne, Georgia, 'Times New Roman', Times, serif;
}

.hero-text {
  font-weight:500 !important;
}
@media(max-width: 1000px) {
  .hero-justify-center .col-sm {
    display: contents;
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
</style>
