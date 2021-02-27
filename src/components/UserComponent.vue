<template>
  <div class="q-pa-md">
    <q-table
      title="Users"
      dense
      :data="data"
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
          headerClasses: 'bg-dark text-white '

        },
        {
          name: "role_id",
          required: true,
          label: "role_id",
          align: "left",
          field: (row) => row.role_id,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: 'bg-dark text-white text-bold'
        },
        {
          name: "name",
          align: "left",
          label: "name",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,

          headerClasses: 'bg-dark text-white text-bold'
        },
        {
          name: "email",
          required: true,
          label: "email",
          align: "left",
          field: (row) => row.email,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: 'bg-dark text-white text-bold'
        },
        {
          name: "password",
          required: true,
          label: "password",
          align: "left",
          field: (row) => row.password,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: 'bg-dark text-white text-bold'
        },
      ],
      data: [
        {
          id: 1,
          role_id: 1,
          name: "Eugene",
          email: "qwerty@gmail.com",
          password: "sobaka"
        },
        {
          id: 2,
          name: "User",
          role_id: 2,
          name: "Vladislav",
          email: "qwerty@gmail.com",
          password: "lohLOSHARA"
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>