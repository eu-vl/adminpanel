<template>
<div class="q-pa-md">
    <q-table
      title="Posts"
      dense
      :data="data"
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
          name: "category_id",
          align: "left",
          label: "CATEGORY_ID",
          field: (row) => row.category_id,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white ",
        },
        {
          name: "subcategory_id",
          align: "left",
          label: "SUBCATEGORY_ID",
          field: (row) => row.subcategory_id,
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
          name: "img_url",
          align: "left",
          label: "IMG_URL",
          field: (row) => row.img_url,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white ",
        },
      ],
      data: [
        {
          id: 1,
          category_id: 1,
          subcategory_id: 1,
          title: "Post-1",
          description:"Chtoto pro post",
          img_url: "kartinochka.jpeg",
        },
      ],
    };
  },
};
</script>

<style>
</style>