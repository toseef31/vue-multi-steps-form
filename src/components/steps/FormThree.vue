<template>
  
  <div class="form-input">
    <label for="dob">Date of Birth</label>
    <Field
      :class="inputClassObject('dob')"
      type="date"
      id="dob"
      name="dob"
      class="input-control"
      :rules="dobRules"
      v-model="dob"
      autofocus
    />
    <ErrorMessage class="input-error-msg" name="dob" />
  </div>

</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'FormThree',
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
      dobRules: yup
        .string()
        .required('enter dob')
    }
  },
  computed: {
    dob: {
      get() {
        return this.$store.state.user.dob
      },
      set(value) {
        this.$store.commit('updateDob', value)
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

<style></style>
