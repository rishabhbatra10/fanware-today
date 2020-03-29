<template>
  <div class="section section-tabs">
    <div class="container">
      <div class="title text-center">
        <h2>Blogs</h2>
      </div>
      <v-sheet
          class="mx-auto"
          elevation="8"
          max-width="900"
        >
          <v-slide-group
            v-model="model"
            class="pa-4"
            show-arrows
            center-active
          >
            <v-slide-item
              v-for="n in 15"
              :key="n"
              v-slot:default="{ active, toggle }"
            >
              <v-card
                :color="active ? '#004c4c' : '#66b2b2'"
                class="ma-4"
                height="400"
                width="300"
                @click="toggle"
              >
                <v-list-item>
                  <v-list-item-avatar color="black"></v-list-item-avatar>
                  <v-list-item-content color="#ffffff">
                    <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                    <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                  height="194"
                ></v-img>
                
                <v-card-text>
                  Visit ten places on our planet that are undergoing the biggest changes today.
                </v-card-text>
                <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                >
                  Read
                </v-btn>
                <v-btn
                  text
                  color="deep-purple accent-4"
                >
                  Bookmark
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
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
    }),
  }
</script>
<style>
.v-card:not(.v-sheet--tile):not(.v-card--shaped){
  margin-right: 5px;
  margin-left: 5px;
}
</style>