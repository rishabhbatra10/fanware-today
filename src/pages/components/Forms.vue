<template>
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
</template>
<script>
import ClientForm from './ClientForm';
import InfluencerForm from './InfluencerForm';

import { Card, Button} from '@/components';

export default {
  components: {
    ClientForm, 
    InfluencerForm,

    // Inbuilt imports 
    [Button.name]: Button,
    Card,

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
}
</script>
<style>
.custom-button{
  margin-right: 5% !important;
}
</style>