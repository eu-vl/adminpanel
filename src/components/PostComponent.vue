<template>
  <div class="q-pa-md">
    <q-table
      title="Posts"
      dense
      :data="$store.state.posts"
      :columns="columns"
      row-key="name"
    />
    <div class="posts">
      <div class="post" v-for="post in $store.state.posts" :key="post.id">
        <q-img
          :src="src + post.images[0].path"
          spinner-color="white"
          style="height: 200px; max-width: 250px"
          alt="IMG"
        />
        <div class="post_content">
          <div class="post_title">
            <h4>{{ post.title }}</h4>
          </div>
          <div class="post_descr">
            {{ post.description }}
          </div>
          <div class="banners">
            <h5>Объявления</h5>
            <div class="banner" v-for="banner in post.banners" :key="banner.id">
              <div class="banner_content">
                <span v-for="img in banner.images" :key="img.id"
                  ><q-img
                    :src="src + img.path"
                    spinner-color="white"
                    style="height: 200px; max-width: 350px"
                    alt="IMG"
                  />
                </span>
                <span class="banner_title">
                  {{ banner.title }}
                </span>
                <div class="banner_descr">
                  {{banner.description}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="link-block">
      <router-link to="/createpost" class="r_link">Create new post</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  data() {
    return {
      src: "http://localhost:8080/uploads/",
      columns: [
        {
          name: "id",
          required: true,
          label: "ID",
          align: "left",
          field: (row) => row.id,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white ",
        },
        {
          name: "category",
          align: "left",
          label: "CATEGORY",
          field: (row) => row.category_id.name,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white ",
        },
        {
          name: "subCategory",
          align: "left",
          label: "SUBCATEGORY",
          field: (row) => row.subCategory_id.name,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white ",
        },
        {
          name: "user",
          required: true,
          label: "USER_NAME",
          align: "left",
          field: (row) => row.user_id.name,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white ",
        },
        {
          name: "title",
          align: "left",
          label: "TITLE",
          field: (row) => row.title,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white ",
        },
        {
          name: "description",
          align: "left",
          label: "DESCRIPTION",
          field: (row) => row.description,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white ",
        },
      ],
    };
  },
};
</script>

<style scoped>
.r_link {
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 10px 20px;
}
.link-block {
  margin-top: 3%;
}
.posts {
  margin-top: 1%;
}
.post {
  margin: 10px;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
}
.post_title {
  text-align: center;
}
.post_title h4 {
  margin: 0;
  padding: 0;
}
.post_content {
  width: 100%;
}
.post_descr {
  margin-left: 2%;
  margin-top: 1%;
}
.banners {
  margin: 20px;
}
.banners h5 {
  text-align: center;
}
.banner {
  width: 25%;
}
.banner_content {
  display: flex;
  flex-direction: column;
}
.banner_title {
  text-align: center;
  font: 16pt bold;
}
</style>