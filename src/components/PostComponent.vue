<template>
  <div class="q-pa-md">
    <q-table
      title="Posts"
      dense
      :data="this.$store.state.posts"
      :columns="columns"
      row-key="name"
    />
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
        {
          name: "image_id",
          align: "left",
          label: "IMAGE ID",
          field: (row) => row.image_id,
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
</style>