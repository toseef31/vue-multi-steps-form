<template>
  
  <div class="form-input">
    <label for="middle-name">Middle Name <small>(Optional)</small></label>
    <Field
      :class="inputClassObject('middleName')"
      type="text"
      id="middle-name"
      name="middle-name"
      :rules="middleNameRules"
      v-model.trim="middleName"
    />
    <ErrorMessage class="input-error-msg" name="middleName" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'FormTwo',
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    errors: {
      type: Object,
    },
  },
  data() {
    return {
      middleNameRules: yup
        .string()
        .trim()
    }
  },
  computed: {
   
    middleName: {
      get() {
        return this.$store.state.user.middleName
      },
      set(value) {
        this.$store.commit('updateMiddleName', value)
      },
    },
  },
  methods: {
    inputClassObject(name) {
      return {
        'input-control': true,
        'has-error': this.errors.hasOwnProperty(name),
      }
    },
  },
}
</script>
