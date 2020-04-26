<template>
  <div class="col-sm content-center">
      <n-button :type="infType" class="custom-button" size="lg" @click="toggleInfluencer">Influencer</n-button>
      <n-button :type="clientType" size="lg" @click="toggleClient" active>&nbsp;&nbsp;Brand&nbsp;&nbsp;</n-button>
  <!-- Nav tabs -->
    <card class="card-signup" header-classes="text-center" color="orange">
      <template slot="header">
      </template>
        <InfluencerForm v-if="influencer" v-model="payload" :payload="payload" />
        <ClientForm v-if="client" v-model="payload" :payload="payload" />
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
  props: {
    isInfluencer: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      influencer: this.isInfluencer,
      client: !this.isInfluencer,
      infType: this.isInfluencer ? "primary": "neutral",
      clientType: !this.isInfluencer ? "primary": "neutral",
      payload: {},
      loading: false
    }
  },
  methods: {
      toggleInfluencer: function() {
        this.client = false; // Switching off client view
        this.influencer = true; // Switching on influencer view
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
      this.influencer = false; 
      this.client = true;
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