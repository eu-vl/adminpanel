<template>
  <div class="q-pa-md">
    <q-table
      title="Banners"
      dense
      :data="data"
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
          name: "post_id",
          align: "left",
          label: "POST_ID",
          field: (row) => row.post_id,
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
          field: (row) => row.title,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: 'bg-dark text-white '
        },
        {
          name: "img_url",
          align: "left",
          label: "IMG_URL",
          field: (row) => row.img_url,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: 'bg-dark text-white '
        }
      ],
      data: [
        {
          id: 1,
          title: "Administrator",
          post_id: 2,
          description:"sdsadsadsad",
          img_url: "path/to/.."
          
        },
         {
          id: 1,
          title: "Administrator",
          post_id: 2,
          description:"sdsadsadsad",
          img_url: "path/to/.."
          
        },
         {
          id: 1,
          title: "Administrator",
          post_id: 2,
          description:"sdsadsadsad",
          img_url: "path/to/.."
          
        },
         {
          id: 1,
          title: "Administrator",
          post_id: 2,
          description:"sdsadsadsad",
          img_url: "path/to/.."
          
        }
      ],
    };
  },
}
</script>

<style>

</style>