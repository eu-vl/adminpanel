<template>
  <div class="q-pa-md">
    <q-table
      title="Roles"
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
          name: "Administrator",
          
        },
        {
          id: 2 ,
          name: "User",
          
        },
      ],
    };
  },
};
</script>

<style>
</style>