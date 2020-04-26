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
                  class="logo-img"
                  :src="item.src"
                  :width="item.width * 0.75"
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
        {src: "img/logos/nykaa.jpg", width: "200"},
        {src: "img/logos/paytm.jpg", width: "200"},
        {src: "img/logos/bsc.jpg", width: "200"},
        {src: "img/logos/absolute_vodka.jpg", width: "200"},
        {src: "img/logos/pankhuri.jpg", width: "200"},
        {src: "img/logos/zest.jpg", width: "200"},
        {src: "img/logos/mpl.jpg", width: "200"},
      ]
    }),
  }
</script>
<style>
.v-card:not(.v-sheet--tile):not(.v-card--shaped){
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  box-shadow: none;
}

.logo-img .v-card > *:last-child:not(.v-btn):not(.v-chip) {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>