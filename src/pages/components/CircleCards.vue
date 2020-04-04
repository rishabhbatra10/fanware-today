<template>
  <v-card
    class="circle-card"
    :color="bgColor"
    :height="size"
    :width="size"
    :style="cssProps"
  >
    <v-card-title>
      <span class="title">{{ value }}</span>
    </v-card-title>

  </v-card>
</template>
<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "#2C6975"
    },
    color: {
      type: String,
      default: "#ffffff"
    },
    size: {
      type: Number,
      default: 150
    },
    value: {
      type: String,
      required: true
    },
    fontSize: {
      type: Number,
      default: 16
    },
    fontWeight: {
      type: Number,
      default: 500
    }
  },
  data: function () {
    return {
      //
    }
  },
  computed: {
    cssProps: function() {
      return {
        '--border-radius': this.size / 2 + 'px',
        '--font-size': this.fontSize + 'px',
        '--text-color': this.color,
        '--font-weight': this.fontWeight,
      }
    }
  }
}
</script>
<style>
.circle-card.v-card {
  display:flex;
  border-radius: var(--border-radius) !important;
  justify-content: center;
  align-items: center;
}

.circle-card.v-card .title {
    padding-top: 0px;
    color: var(--text-color);
    font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
    font-weight: var(--font-weight);
    font-size: var(--font-size);
    word-break: normal !important;
  }

</style>