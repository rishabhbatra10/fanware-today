<template>
  <div>
    <div class="page-header custom-filter" filter-color="primary">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="row">
          <div class="col-sm content-center">
          <!-- <img class="n-logo" src="img/now-logo.png" alt="" /> -->
            <h1 class="h1-seo">Fanware Today</h1>
            <h3 class="h3">Grow your business through people powered Marketing</h3>
          </div>

          <div class="col-sm content-center">
             <n-button :type="infType" class="custom-button" size="lg" @click="toggleInfluencer">Influencer</n-button>
             <n-button :type="clientType" size="lg" @click="toggleClient">&nbsp;&nbsp;Client&nbsp;&nbsp;</n-button>
          <!-- Nav tabs -->
            <card class="card-signup" header-classes="text-center" color="orange">
              <template slot="header">
              </template>
                <InfluencerForm v-if="isInfluencer" v-model="payload" :payload="payload" />
                <ClientForm v-if="isClient" v-model="payload" :payload="payload" />
                <div class="card-footer text-center">
                  <n-button type="neutral" round size="lg" @click="submitForm()" >Get Started</n-button>
                </div>
            </card>
          </div>
        </div>
        </div>
        <!-- <h6 class="category category-absolute">
          Designed by
          <a href="http://invisionapp.com/" target="_blank">
            <img src="img/invision-white-slim.png" class="invision-logo" /> </a
          >. Coded by
          <a href="https://www.creative-tim.com" target="_blank">
            <img
              src="img/creative-tim-white-slim2.png"
              class="creative-tim-logo"
            /> </a
          >.
        </h6> -->
    </div>
    <div class="main">
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
    </div>
    <HomeSection id="home" />
    <WorkSection id="work" />
    <NucleoIconsSection id="influencers" />
    <!-- <SlideGroupSection id="blogs" /> -->
    <AboutSection id="about" />
    <ContactSection id="contact" />
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
import SignupForm from './components/SignupForm';
import ClientForm from './components/ClientForm';
import InfluencerForm from './components/InfluencerForm';
import ExamplesSection from './components/ExamplesSection';
import DownloadSection from './components/DownloadSection';
import SlideGroupSection from './components/SlideGroupSection';
import WorkSection from './components/WorkSection.vue';
import HomeSection from './components/HomeSection.vue';
import ContactSection from './components/ContactSection.vue';
import { Card, FormGroupInput, FormGroupTextArea, Button, Tabs, TabPane } from '@/components';

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
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [FormGroupTextArea.name]: FormGroupTextArea,
    ClientForm,
    InfluencerForm,
    WorkSection,
    HomeSection,
    ContactSection
  },
  data: function() {
    return {
    isInfluencer: true,
    isClient: false,
    infType: "primary",
    clientType: "neutral",
    payload: {},
    loading: false
    }
  },
  methods: {
    toggleInfluencer: function() {
      this.isClient = false; // Switching off client view
      this.isInfluencer = true; // Switching on influencer view
      this.clientType = "neutral" // changing client button colors
      this.infType = "primary"; // chaning influencer button colors
      this.clientPayload = this.payload // storing clientPayload
      if (this.influencerPayload) { // if influencer payload exists then payload is set to influencer payload
        this.payload = this.influencerPayload
      }
      else {
        this.payload = {}; // else payload is set to empty object
      }
    },
    toggleClient: function() {
      this.isInfluencer = false; 
      this.isClient = true;
      this.infType = "neutral";
      this.clientType = "primary";
      this.influencerPayload = this.payload
      if (this.clientPayload) {
        this.payload = this.clientPayload
      }
      else {
        this.payload = {};
      }
    },
    submitForm: function() {
      this.loading = true; // setting loading state true
      console.log("submitting form with payload: ", payload)

      this.loading = false // setting loading state false
    }
  }
};
</script>
<style>
.h1-seo {
  color: #2C6975 !important;
}
.custom-button{
  margin-right: 5% !important;
}
</style>
