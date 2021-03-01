<template>
  <div class="q-pa-md">
    <q-table
      title="Users"
      dense
      :data="this.$store.state.users"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
export default {
  name: "UserComponent",
  data() {
    return {
      columns: [
        {
          name: "id",
          required: true,
          label: "id",
          align: "left",
          field: (row) => row.id,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white ",
        },
        {
          name: "role",
          required: true,
          label: "role_id",
          align: "left",
          field: (row) => row.role.id,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white text-bold",
        },
        {
          name: "name",
          align: "left",
          label: "name",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,

          headerClasses: "bg-dark text-white text-bold",
        },
        {
          name: "email",
          required: true,
          label: "email",
          align: "left",
          field: (row) => row.email,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white text-bold",
        },
        {
          name: "password",
          required: true,
          label: "password",
          align: "left",
          field: (row) => row.password,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-dark text-white text-bold",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>