<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-8 offset-2">
        <div class="card">
          <div class="card-header">Yeni Soru</div>
          <div class="card-body">
            <div class="mb-3">
              <label for="question-title" class="form-label"
                >Kısa bir başlık</label
              >
              <input
                v-model="questionData.title"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Soru başlığı"
              />
            </div>
            <div class="mb-3">
              <label for="question-details" class="form-label">Detaylar</label>
              <textarea
                v-model="questionData.details"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="question-category" class="form-label">Kategori</label>
              <select
                v-model="questionData.categoryId"
                id="question-category"
                class="form-select"
                aria-label="Default select example"
              >
                <option
                  v-for="category in categories"
                  :value="category.id"
                  :key="category.id"
                >
                  {{ category.title }}
                </option>
              </select>
            </div>
          </div>
          <div class="card-footer text-muted">
            <button
              :disabled="notAbleToSave"
              type="submit"
              class="btn btn-sm btn-primary"
              @click="onSave"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { appAxios } from "@/utils/securedAxios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      questionData: {
        title: null,
        details: null,
        categoryId: null,
      },
    };
  },

  created() {
    
    this.questionData.categoryId = this.$route.query?.categoryId || null;

  },
  methods: {
    onSave() {
      if (confirm("İşleme devam etmek istiyor musunuz ?")) {
        appAxios
          .post("/questions", { ...this.questionData, created_at: new Date() })
          .then((question_response) => {
            console.log(question_response);
            this.$router.push({ name: "Home" });
          });
      }
    },
  },
  computed: {
    notAbleToSave() {
      return (
        this.questionData?.title?.length === 0 ||
        this.questionData?.details?.length === 0 ||
        this.questionData.categoryId === null
      );
    },
    ...mapGetters({
      categories: "categories/_categoryList",
    }),
  },
};
</script>