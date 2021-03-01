<template>
<div class="q-pa-md">
    <q-table
      title="Posts"
      dense
      :data="this.$store.state.posts"
      :columns="columns"
      row-key="name"
    />
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
          field: (row) => row.category.name,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white ",
        },
        {
          name: "subCategory",
          align: "left",
          label: "SUBCATEGORY",
          field: (row) => row.subCategory.name,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white ",
        },
        {
          name: "user",
          required: true,
          label: "USER_NAME",
          align: "left",
          field: (row) => row.user.name,
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
          name: "imgUrl",
          align: "left",
          label: "IMG_URL",
          field: (row) => row.imgUrl,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white ",
        },
      ],
    };
  },
};
</script>

<style>
</style>