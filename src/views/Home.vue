<template>
  <div>
    <my-navbar></my-navbar>

    <div class="bg-4 pb-3">
      <div class="container">
        <h1 class="text-white text-center font-weight-bold pt-3">
          Toko Online Praktis
          <span class="font-12 font-weight-bold">dengan</span><br />
          Fitur Checkout Order Via WhatsApp
        </h1>
        <img
          src="https://bislin.com/img/homepage/newbannerbislin.png"
          class="d-block m-auto pt-5 w-75"
          alt=""
        />
        <h3 class="text-center text-white font-weight-bold pt-4">
          Demo Toko Online
        </h3>
        <div class="demo-toko aflex justify-content-center mb-3">
          <button class="demo-toko__btn" v-for="i in 7" :key="i">
            Toko Online Qurban 99
          </button>
        </div>
        <button class="btn btn-danger d-block m-auto px-4 py-3 toko-onlines">
          Buat Toko Online
        </button>
      </div>
    </div>
    <cocok></cocok>
    <come-on></come-on>
    <my-footer></my-footer>
  </div>
</template>


<style>
.demo-toko__btn {
  border-radius: 16px;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.1);
  color: #4d4a48;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;

  letter-spacing: -0.4px;
  line-height: 30px;
  margin: 10px;
  padding: 2px 18px 0;
  transition: transform 0.5s;
}
.demo-toko__btn:hover {
  background: #ffd647;
}
.toko-onlines {
  font-size: 1.7vh !important;
}
</style>
