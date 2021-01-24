<template>
  <div>
    {{ email || 'no user found' }}
    <button @click="logout">Log out</button>
  </div>
</template>
<script>
import { db } from "../store/db";
export default {
  data: () => ({
    user: [],
    email:''
  }),
  methods: {
    logout() {
      this.$router.replace("/login");
      db.auth().signOut();
    },
  },
  mounted() {
      db.auth().onAuthStateChanged((user) => {
        this.email= user.email
      });    
  },
};
</script>
