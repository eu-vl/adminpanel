<template>
  <div>
    <div class="q-pa-md form-div" style="max-width: 400px">
      <q-form
        class="q-gutter-md"
        action="http://localhost:8080/users/add/"
        method="post"
      >
        <q-input
          clearable
          filled
          v-model="name"
          label="Name"
          hint="Enter your name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        >
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
        <q-input
          clearable
          filled
          v-model="email"
          label="Email"
          hint="Enter your email"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        >
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
        <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          hint="Enter your password"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-select
          square
          outlined
          v-model="role"
          :options="roleNames"
          label="Register as:"
        />

        <div>
          <q-btn label="Сreate new new user" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      isPwd: true,
      role: null,
      name: null,
      email: null,
      password: null,
      roleNames: []
    };
  },
  beforeMount(){
    let roles = this.$store.state.roles
    let roleNames = []
    roles.forEach(e => {
      roleNames.push(e.name)
    });
    this.roleNames = roleNames
  }
};
</script>

<style scoped>
.form-div {
  margin: auto;
}
</style>