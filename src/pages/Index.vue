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
              <template v-if="isInfluencer">
                  <fg-input
                    class="no-border"
                    placeholder="Your Name..."
                    addon-left-icon="now-ui-icons users_circle-08"
                  >
                  </fg-input>

                  <fg-input
                    class="no-border"
                    placeholder="Email"
                    addon-left-icon="now-ui-icons ui-1_email-85"
                  >
                  </fg-input>

                  <fg-input
                    class="no-border"
                    placeholder="Instagram Handle"
                    addon-left-icon="fab fa-instagram"
                  >
                  </fg-input>

                  <fg-input
                    class="no-border"
                    placeholder="Youtube Channel"
                    addon-left-icon="fab fa-youtube"
                  >
                  </fg-input>

                  <fg-input
                    class="no-border"
                    placeholder="Whatsapp Phone"
                    addon-left-icon="fab fa-whatsapp"
                  >
                  </fg-input>

                </template>
                <div class="card-footer text-center">
                  <n-button type="neutral" round size="lg">Get Started</n-button>
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
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">About Us</h2>
            <h5 class="description">
              Content to be added 
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Parallax } from '@/components';
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
import ExamplesSection from './components/ExamplesSection';
import DownloadSection from './components/DownloadSection';
import { Card, FormGroupInput, Button, Tabs, TabPane } from '@/components';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
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
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data: function() {
    return {
    isInfluencer: true,
    isClient: false,
    infType: "primary",
    clientType: "neutral"
    }
  },
  methods: {
    toggleInfluencer: function() {
      this.isClient = false;
      this.isInfluencer = true;
      this.clientType = "neutral"
      this.infType = "primary";
    },
    toggleClient: function() {
      this.isInfluencer = false;
      this.isClient = true;
      this.infType = "neutral";
      this.clientType = "primary";
    }
  }
};
</script>
<style>
.h1-seo {
  color: #004c4c !important;
}
.custom-button{
  margin-right: 5% !important;
}
</style>
