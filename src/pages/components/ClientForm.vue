<template>
  <div>
    <fg-input
      v-model="payload.company_name"
      class="no-border"
      placeholder="Company Name..."
      addon-left-icon="fas fa-building"
    >
    </fg-input>

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
      placeholder="Work Email"
      addon-left-icon="now-ui-icons ui-1_email-85"
    >
    </fg-input>

    <fg-input
      v-model="payload.phone"
      class="no-border"
      placeholder="Phone"
      addon-left-icon="now-ui-icons tech_headphones"
    >
    </fg-input>
    <fg-textarea 
      v-model="payload.message"
      class="no-border"
      placeholder="message"
      addon-left-icon="now-ui-icons files_paper"
    >
    </fg-textarea>

  </div>
</template>
<script>
import { FormGroupInput, FormGroupTextArea } from '@/components';

export default {
  components: {
    [FormGroupInput.name]: FormGroupInput,
    [FormGroupTextArea.name]: FormGroupTextArea
  },
  props: {
    payload: {
      type: Object,
      required: false,
      default: function() {
        return {}
      }
   }
  }
}
</script>
<style></style>
