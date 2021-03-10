<template>
  <div class="q-pa-md">
    <q-table
      title="Banners"
      dense
      :data="$store.state.banners"
      :columns="columns"
      row-key="name"
    />
    <div class="link-block">
      <router-link to="/createbanner" class="r_link">Create new banner</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
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
</style>