<template>
  <div>
    <fg-input
    v-model="payload.name"
    class="no-border"
    placeholder="Your Name..."
    addon-left-icon="now-ui-icons users_circle-08"
    >
    </fg-input>

    <fg-input
    v-model="payload.email"
    class="no-border"
    placeholder="Email"
    addon-left-icon="now-ui-icons ui-1_email-85"
    >
    </fg-input>

    <fg-input
    v-model="payload.instagram"
    class="no-border"
    placeholder="Instagram Handle"
    addon-left-icon="fab fa-instagram"
    >
    </fg-input>

    <fg-input
    v-model="payload.youtube"
    class="no-border"
    placeholder="Youtube Channel"
    addon-left-icon="fab fa-youtube"
    >
    </fg-input>

    <fg-input
    v-model="payload.whatsapp"
    class="no-border"
    placeholder="Whatsapp Phone"
    addon-left-icon="fab fa-whatsapp"
    >
    </fg-input>

  </div>
</template>
<script>
import { FormGroupInput } from '@/components';

export default {
  components: {
    [FormGroupInput.name]: FormGroupInput
  },
  props: {
    payload: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    }
  }
};
</script>
<style></style>
