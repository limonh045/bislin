<template>
  <div class="bg-4" style="height:100vh">
    <img
      src="https://app.bislin.com/img/logos/bislinlogobigblue.svg"
      class="d-block m-auto pt-5 pb-3"
      alt=""
    />
    <p class="text-center text-white">bislin - Toko Online Praktis Whatsapp</p>
    <div class="card px-5 py-3">
      <b-form>
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
          min-length="6"
          ref="pass"
        ></text-input>
        <text-input
          placeholder="Re-Password"
          label="Re-Password"
          v-model="repassword"
          type="password"
          min-length="6"
          ref="repass"
          :valueMatch="form.password"
        ></text-input>
        <button
          type="submit"
          @click.prevent="formHandel"
          class="d-block w-100 btn btn-info mt-3 mb-5"
        >
          ok
        </button>
      </b-form>

      <button class="w-50 d-block btn btn-danger m-auto ">
        Login With Google
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {
      email: "",
      password: "",
      returnSecureToken: true,
    },
    repassword: "",
  }),
  methods: {
    async formHandel() {
      this.$refs.repass.validation();
      this.$refs.pass.validation();
      this.$refs.email.validation();
      if (
        this.$refs.email.ifError === false ||
        this.$refs.pass.ifError === false ||
        this.$refs.repass.ifError === false
      ) {
        return;
      }

      await this.$axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjrLqBknVL0mJVehAfZ1-jzZ6WpUmbfaI",
          this.form
        )
        .then((res) => {
          localStorage.setItem("token", res.data.idToken);
          this.$router.replace("/pro");
          this.sendAuthData();
        })
        .error((err) => console.log(err));

      console.log(this.form);
    },
    async sendAuthData() {
      const token = localStorage.getItem("token");
      await this.$axios
        .post(
          "https://bislin-68a9c-default-rtdb.firebaseio.com/user.json?auth=" +
            token,
          this.form
        )
        .then((res) => {
          console.log(res);
        })
        .error((err) => console.log(err));
    },
  },
  computed: {},
};
</script>
<style scoped>
.card {
  max-width: 32rem;
  margin: auto;
}
</style>
