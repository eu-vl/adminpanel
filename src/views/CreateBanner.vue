<template>
  <div>
    <div class="q-pa-md form-div" style="max-width: 400px">
      <q-form
        class="q-gutter-md"
        id="form"
        @submit.prevent="onSubmit"
        method="post"
        enctype="multipart/form-data"
      >
        <q-input
          filled
          v-model="title"
          square
          outlined
          label="Title"
          hint="Some title here"
          lazy-rules
          name="title"
        />

        <q-input
          v-model="description"
          filled
          square
          outlined
          autogrow
          label="Description"
          hint="Some description here"
          name="description"
          lazy-rules
        />

        <q-file
          color="dark-12"
          v-model="image"
          label="Choose an image for your banner"
          counter
          name="file"
          max-files="1"
          style="max-width: 365px"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
        <q-select
          square
          outlined
          name="post"
          v-model="post"
          :options="posts"
          :option-value="
            (opt) => (Object(opt) === opt && 'id' in opt ? opt.id : null)
          "
          :option-label="
            (opt) =>
              Object(opt) === opt && 'title' in opt ? opt.title : '- Null -'
          "
          label="Select a post for your banner"
        />
        <div>
          <q-btn label="Сreate new banner" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      title: null,
      description: null,
      image: null,
      post: null,
      posts: [],
    };
  },
  methods: {
    onSubmit() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("post_id", this.post.id);
      formData.append("file", this.image);
      formData.append("path", formData.getAll("file")[0].name);
      console.log(formData.getAll("path")[0]);
      axios({
        method: "post",
        url: "http://localhost:8080/banners/add",
        data: formData,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  beforeMount() {
    let Sposts = this.$store.state.posts;
    let posts = [];
    Sposts.forEach((e) => {
      posts.push(e);
    });
    this.posts = posts;
    console.log(this.posts);
  },
};
</script>

<style scoped>
.form-div {
  margin: auto;
}
</style>