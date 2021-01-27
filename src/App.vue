<template>
  <router-view name="appHeader" />
  <router-view />
</template>


<script>
export default {
  
  created(){
      this.$store.dispatch("initApp")
    //   this.$store.dispatch("categories/fetchCategories")
  }
};
</script>