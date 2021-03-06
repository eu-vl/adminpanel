<template>
  <div>
    <div class="q-pa-md form-div" style="max-width: 400px">
      <q-form
        class="q-gutter-md"
        action="http://localhost:8080/posts/add/"
        method="post"
        enctype="multipart/form-data"
      >
        <q-input
          filled
          v-model="title"
          label="Title"
          hint="Some title here"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          v-model="description"
          filled
          autogrow
          label="Description"
          hint="Some description here"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-file
          color="dark-12"
          v-model="image"
          label="Choose an image for your post"
          counter
          max-files="1"
          style="max-width: 365px;"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>

        <q-select
          square
          outlined
          v-model="category"
          :options="categories"
          label="Select a country"
        />
        <q-select
          square
          outlined
          v-model="subcategory"
          :options="subcategories"
          label="Select a city"
        />

        <div>
          <q-btn label="Сreate new post" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      title: null,
      description: null,
      image: null,
      category: null,
      subcategory: null,
      categories: [],
      subcategories: []
    };
  },
 
  beforeMount(){
    let categories = this.$store.state.categories
    let subcategories = this.$store.state.subcategories
    let subcatNames = []
    let catNames = []
    categories.forEach(e => {
      catNames.push(e.name)
    });
    subcategories.forEach(e => {
      subcatNames.push(e.name)
    })
    this.categories = catNames
    this.subcategories = subcatNames
    console.log(this.categories)
  }
};
</script>

<style scoped>
.form-div {
  margin: auto;
}
</style>