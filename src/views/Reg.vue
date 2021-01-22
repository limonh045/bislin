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
        <text-input
          placeholder="Re-Password"
          label="Re-Password"
          v-model="form.repassword"
          type="password"
          min-length='6'
          ref="repass"
          :valueMatch='form.password'
        ></text-input>
        <button type="submit" class="d-block w-100 btn btn-info mt-3 mb-5">ok</button>
      </b-form>
      
      <button class="w-50 d-block btn btn-danger m-auto ">Login With Google</button>
 
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {
      email: "",
      password: "",
      repassword:''
    },
  }),
  methods: {
    formHandel() {
      this.$refs.repass.validation();
      this.$refs.pass.validation();
      this.$refs.email.validation();
      if (
        this.$refs.email.ifError === false ||
        this.$refs.pass.ifError === false || this.$refs.repass.ifError === false
      ) {
        return;
      }
      console.log(this.form);
    },
  },
  computed: {

  },
};
</script>
<style scoped>
.card {
  max-width: 32rem;
  margin: auto;
}
</style>
