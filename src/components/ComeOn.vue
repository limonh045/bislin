<template>
  <div class="container">
    <h2 class="text-info text-center mt-5">
      Come on, Create Your Online Store now, it's FREE!
    </h2>
    <p class="text-center w-75 font-16 m-auto d-block mt-5 color-gray pb-4">
      Bislin understands the needs of you, who are starting an online business.
      Bislin provides a platform that is easy to use, comfortable, professional
      and ready to jump-start your business. Let's create your online shop now
      with Bislin!
    </p>
    <button class="btn btn-danger px-3 py-2  d-block m-auto">
      Sign Up Now
    </button>
    <h1 class="text-center text-info py-4">FAQ</h1>

    <div style="max-width:555px" class="d-block m-auto">
      <div
        class="collapse-slider"
        v-for="(slide, i) in slideCollapses"
        :key="i"
      >
        <div
          class=" collapse-title font-weight-bold"
          v-b-toggle:my-collapse
          @click="collapseHandel(i)"
          :class="{titlecolor:index==i}"
        >
          {{ slide.name }}
        </div>

        <b-collapse id="my-collapse" class="collpase-descrip px-4 " v-if="index == i">
          {{ slide.description }}
        </b-collapse>
      </div>
    </div>
  </div>
</template>
<script>
import { slideCollapses } from "../store/data/slideCollapses";
export default {
  data: () => ({
    slideCollapses,
    index: null,
  }),
  methods: {
    collapseHandel(i) {
      this.index = i;
    },
  },
};
</script>
<style scoped>
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
.collapse-slider {
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  margin: 22px 0;
  color: #181a1f;
}
.collapse-title {
  min-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
}
.titlecolor{
        color: #3bbaed!important;
}
.collapse-title:focus {
  outline: none !important;
}
.collpase-descrip{

}
</style>
