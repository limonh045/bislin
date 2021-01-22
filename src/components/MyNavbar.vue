<template>
  <div class=" navbars-e" :class="{navbartop: scrollPosition>48}">
    <b-navbar toggleable="lg" type="dark" >
      <div class="container">
        <b-navbar-brand href="#">
        
            <img v-if="scrollPosition<48"
            src="https://bislin.com/img/logos/logo-bislin-white.svg"
            class="navbar-img"
            alt="Navbar logo"
          />
          <img src="https://bislin.com/img/logos/bislinlogobigblue.svg" v-else alt="">
        
          <img src="https://bislin.com/img/logos/gratis-merah.svg" alt="" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" class="toggle-btn" :class="{togglebtn: scrollPosition>48}"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav></b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <router-link to="/li" class=" mt-1 mx-2 login-link smtext-center smb-3" :class="{color4 : scrollPosition>48}"
              >Login</router-link
            >
            <button
              class="btn btn-warning text-capitalize font-weight-bold  font-12 mx-3"
            >
              create a free shop
            </button>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    
  </div>
</template>
<script>
export default {
  data: () => ({
     scrollPosition: null
      }),
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      console.log(this.scrollPosition);
    },
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>
<style>
.navbars-e{
  background-color: #3bbaed;
  padding-top: 20px;
}
.navbartop {
  background: #ffff !important;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 0 !important;
  z-index: 999;
}
.toggle-btn{
  background: transparent !important;
}
.togglebtn{
  background: #ebebeb !important;
  border: 1px solid #ebebeb !important;
}

.navbar-img {
  height: 40px;
}
.login-link {
  font-size: 11px;
  font-weight: bold;
  color: #ffff;
}

</style>
