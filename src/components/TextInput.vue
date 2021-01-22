<template>
  <div>
    <label for="feedback-user" class="text-label">{{ label }}</label>
    <b-form-input
      :value="value"
      @input="inputHandel($event)"
      :state="ifError"
      id="feedback-user"
      :type="type"
      :placeholder="placeholder"
      ref="inputchild"
    ></b-form-input>
    <b-form-invalid-feedback :state="ifError">
      {{ errorMessage }}
    </b-form-invalid-feedback>
    <b-form-valid-feedback :state="ifError">
      Looks Good.
    </b-form-valid-feedback>
  </div>
</template>
<script>
export default {
  data: () => ({
    errorMessage: "",
    ifError: null,
    errorHandle: false,
  }),
  props: {
    value: {
      type: String,
    },
    minLength: {},
    label: {
      type: String,
    },
    placeholder: {},
    type: {
      default: "text",
    },
    valueMatch: {},
  },
  methods: {
    inputHandel(e) {
      this.$emit("input", e);
      if (this.errorHandle) {
        this.validation();
      }
    },
    validation() {
      var re = /\S+@\S+\.\S+/;
      if (this.type && this.type === "email" && re.test(this.value) == false) {
        this.errorMessage = "email not valid";
        this.ifError = false;
        this.$refs.inputchild.focus();
      } else if (
        this.minLength &&
        this.value.length < parseInt(this.minLength)
      ) {
        this.errorMessage = `This field must be ${this.minLength} caracter length`;
        this.ifError = false;
        this.$refs.inputchild.focus();
      } else if (this.valueMatch && this.valueMatch !== this.value) {
        this.errorMessage = "Password Doesnot Match";
        this.ifError = false;
        this.$refs.inputchild.focus();
      } else {
        this.ifError = true;
      }
    },
  },
};
</script>
<style scoped>
.text-label {
  font-size: 12px;
  font-weight: 700;
  color: #6e6e6e;
}
</style>
