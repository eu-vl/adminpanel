<template>
  <div class="q-pa-md">
    <q-table
      title="SubCategories"
      dense
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
export default {
  name: "RoleComponent",
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
          name: "category_id",
          align: "left",
          label: "CATEGORY_ID",
          field: (row) => row.category_id,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: 'bg-dark text-white '
        },
        {
          name: "name",
          align: "left",
          label: "NAME",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: 'bg-dark text-white '
        },
      ],
      data: [
        {
          id: 1,
          name: "Kyiv",
          category_id: 1,
        },
      ],
    };
  },
};
</script>

<style>
</style>