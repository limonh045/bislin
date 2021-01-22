<template>
  <div class="bg-4" style="height:100vh">
    <img
      src="https://app.bislin.com/img/logos/bislinlogobigblue.svg"
      class="d-block m-auto pt-5 pb-3"
      alt=""
    />
    <p class="text-center text-white">bislin - Toko Online Praktis Whatsapp</p>
    <div class="card px-5 py-3">
      <b-form @submit.stop.prevent='formHandel'>
        <text-input
          v-model="form.email"
          label="Email"
          placeholder="Email"
          type="email"
          ref="email"
        ></text-input>
        <text-input
          placeholder="Password"
          label="Password"
          v-model="form.password"
          type="password"
          min-length='6'
          ref="pass"
        ></text-input>
        <button type="submit" class="d-block w-100 btn btn-info mt-3 mb-5">ok</button>
      </b-form>
      
      <button class="w-50 d-block btn btn-danger m-auto ">Login With Google</button>
      <!-- <b-form  @submit.stop.prevent>
      <label for="feedback-user">User ID</label>
      <b-form-input v-model="userId" :state="validation" id="feedback-user"></b-form-input>
      <b-form-invalid-feedback :state="validation">
        Your user ID must be 5-12 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>
     </b-form>
      <b-form @submit.stop.prevent="formHandel">
        <label for="email">User ID</label>
        <b-form-input
          v-model="form.email"
          :state="validationEmail"
          id="email"
        ></b-form-input>
        <b-form-invalid-feedback :state="validationEmail">
          Email is invalid
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validationEmail">
          Looks Good.
        </b-form-valid-feedback>

        <label for="password">User ID</label>
        <b-form-input
          v-model="form.password"
          :state="validationPassword"
          id="password"
        ></b-form-input>
        <b-form-invalid-feedback :state="validationPassword">
          Password Must Be 6 caracter long
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validationPassword">
          Looks Good.
        </b-form-valid-feedback>

        <button type="submit">okkk</button>
      </b-form> -->
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    formHandel() {
      
      this.$refs.pass.validation();
      this.$refs.email.validation();
      if (
        this.$refs.email.ifError === false ||
        this.$refs.pass.ifError === false
      ) {
        return;
      }
      console.log(this.form);
    },
  },
  computed: {
    // validationEmail() {
    //   var re = /\S+@\S+\.\S+/;
    //   return this.form.email === "email" && re.test(this.value);
    // },
    // validationPassword() {
    //   return this.form.password.length > 6;
    // },
    //  validation() {
    //     return this.userId.length > 4 && this.userId.length < 13
    //   }
  },
};
</script>
<style scoped>
.card {
  max-width: 32rem;
  margin: auto;
}
</style>
