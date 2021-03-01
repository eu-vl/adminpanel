<template>
  <div class="q-pa-md">
    <q-table
      title="Banners"
      dense
      :data="this.$store.state.banners"
      :columns="columns"
      row-key="name"
    />
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
          headerClasses: 'bg-dark text-white '
        },
        {
          name: "post",
          align: "left",
          label: "POST",
          field: (row) => row.post.title,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: 'bg-dark text-white '
        },
        {
          name: "title",
          align: "left",
          label: "TITLE",
          field: (row) => row.title,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: 'bg-dark text-white '
        },
        {
          name: "description",
          align: "left",
          label: "DESCRIPTION",
          field: (row) => row.description,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: 'bg-dark text-white '
        },
        {
          name: "imgUrl",
          align: "left",
          label: "IMG_URL",
          field: (row) => row.imgUrl,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: 'bg-dark text-white '
        },
        {
          name: "user",
          align: "left",
          label: "USER_NAME",
          field: (row) => row.post.user.name,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: 'bg-dark text-white '
        }
      ],
    };
  },
}
</script>

<style>

</style>