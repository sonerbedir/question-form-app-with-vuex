import { appAxios } from "@/utils/securedAxios";
export default {
    namespaced: true,
    state: {
        questions: []
    },
    mutations: {

        setQuestions(state, pQuestions) {
            state.questions = pQuestions
        },
        // setNewQuestions(){}
    },
    actions: {

        fetchQuestions({ commit }, selectedCategories) {
            // const url = this.categoryId
            // ? `/questions?_expand=category&_sort=created_at&_order=desc&categoryId=${this.categoryId}`
            // : `/questions?_expand=category&_sort=created_at&_order=desc&categoryId=1&categoryId=2`;

            let url = `/questions?_expand=category&_sort=created_at&_order=desc`
            if (selectedCategories) {
                const selectedCategoryIds = selectedCategories?.filter(c => c.selected)
                    .map(c => `categoryId=${c.id}`)
                    .join("&")
                url = `${url}&${selectedCategoryIds}`
            }

            appAxios
                .get(url).then((question_response) => {
                    commit("setQuestions", question_response?.data || []);
                });

        },
        newQuestion() { }   

    },
    getters: {

        _questionList: (state) => state.questions
    }
}