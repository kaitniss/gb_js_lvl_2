const filter_el = {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `
    <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
<!--                <search-input v-model="userSearch"></search-input>-->
          <input type="text" class="search-field" v-model='userSearch'>
          <button type="submit" class="search-btn">
              <i class="fas fa-search"></i>
          </button>
    </form>
    `
}