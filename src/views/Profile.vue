<template>
  <div>
    profile
    {{ user[0].email }}
    <button @click="logout">Log out</button>
  </div>
</template>
<script>
export default {
    data:()=>({
user:[]
    }),
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.replace("/login");
    },
  },
  created() {
  
      
      const token = localStorage.getItem("token");
      this.$axios
        .get("https://bislin-68a9c-default-rtdb.firebaseio.com/user.json?auth="+token)
        .then((res) => {
        //   console.log(res.data);
          for (const key in res.data) {
              res.data[key].id = key
            this.user.push(res.data[key])
          }
          console.log(this.user[0]);
        })
        .error((err) => console.log(err));
     
    
  },
};
</script>

