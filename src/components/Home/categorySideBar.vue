<template>
  <div class="col-2">
    <!-- <pre>
      {{selectedCategories}}
    </pre> -->
    <div class="d-grid gap-2 mb-2">
      <router-link
        class="btn btn-primary d-flex justify-content-between align-items-center"
        type="button"
        style="background-color: #8409de"
        to="/new"
      >
        <span>Soru Sor </span>
        <i class="fa fa-edit"></i>
      </router-link>
    </div>
    <div
      v-for="(category, index) in categories"
      :key="category.id"
      class="list-group"
    >
      <a
        href="#"
        class="list-group-item list-group-item-action"
        :class="{active: category.selected}"
        aria-current="true"
        @click.prevent="category.selected=!category.selected"
      >
        <i
          class="fa fa-hashtag custom-text-light me-2"
          :class="{ [textColor(index)]: true }"
        ></i>
        <span>{{ category.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      colors: [
        "text-primary",
        "text-secondary",
        "text-danger",
        "text-info",
        "text-success",
        "text-warning",
        "text-dark",
        "text-muted",
      ],
    };
  },
  methods: {
    textColor(index) {
      return this.colors[index % this.colors.length];
    },
  },
  computed: {
    ...mapGetters({
      categories: "categories/_categoryList",
      selectedCategories: "categories/_selectedCategoryList"
    }),
  },

  watch:{
    categories:{

      deep: true,
      handler(categories){
       this.$store.dispatch("questions/fetchQuestions", categories)
      }
    }
  }
};
</script>