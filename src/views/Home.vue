<template>
    <div class="container-fluid">
      <div class="row mt-3">
        <!-- KATEGORILER -->
        <category-side-bar @category-select-event="categoryId= $event" />
        <!-- !KATEGORILER -->

        <!-- SORULAR -->
        <question-list :categoryId = "categoryId" />
        <!-- !SORULAR -->
      </div>
    </div>
</template>
<script>
// @ is an alias to /src
import questionList from "@/components/Home/questionList";
import categorySideBar from "@/components/Home/categorySideBar";
export default {
  name: "Home",
  components: {
    questionList,
    categorySideBar,
  },

  data(){
    return {

      categoryId: null
    }
  },

};
</script>
