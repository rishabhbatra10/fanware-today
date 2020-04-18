<template>
  <div class="section section-tabs">
    <div class="container">
      <div class="title text-center">
        <h2 class="title">Brands</h2>
      </div>
      <v-sheet
          class="mx-auto"
          elevation="8"
          max-width="1100"
        >
          <v-slide-group
            v-model="model"
            class="pa-4"
            show-arrows
            center-active
          >
            <v-slide-item
              v-for="(item, key) in LogoList"
              :key="key"
              v-slot:default="{ active, toggle }"
            >
              <v-card
                class="ma-4"
                @click="toggle"
              >

                <v-img
                  :src="item.src"
                  :width="item.width"
                ></v-img>
                
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Vuetify, { 
  VSheet,  
  VSlideGroup, 
  VSlideItem, 
  VCard, 
  VListItem, 
  VImg, 
  VCardText, 
  VCardActions,
  VBtn,
  VRow,
  VScaleTransition,
  VSpacer,
  VIcon,
  VListItemContent,
  VListItemAvatar,
  VListItemTitle,
  VListItemSubtitle,
  } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: { 
    VSheet, 
    VSlideGroup, 
    VSlideItem, 
    VCard, 
    VListItem, 
    VImg, 
    VCardText,
    VCardActions,
    VBtn,
    VRow,
    VScaleTransition,
    VSpacer,
    VIcon,
    VListItemContent,
    VListItemAvatar,
    VListItemTitle,
    VListItemSubtitle
    },
})
  export default {
    data: () => ({
      model: null,
      LogoList: [
        {src: "img/logos/nyka_section.jpg", width: "200"},
        {src: "img/logos/avail.png", width: "200"},
        {src: "img/logos/bombay_shaving.jpeg", width: "200"},
        {src: "img/logos/MPL_Crest.png", width: "200"},
        {src: "img/logos/oyo.png", width: "200"},
        {src: "img/logos/paytm_logo.png", width: "200"},
        {src: "img/logos/zest_logo.png", width: "200"}
      ]
    }),
  }
</script>
<style>
.v-card:not(.v-sheet--tile):not(.v-card--shaped){
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  box-shadow: none;
}
</style>