<template>
  <div class="q-pa-md">
    <q-table
      title="Users"
      dense
      :data="this.$store.state.users"
      :columns="columns"
      row-key="name"
    />
    <div class="link-block">
  <router-link to="/createuser" class="r_link">Create new user</router-link>
  </div>
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
          field: (row) => row.role_id.id,
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