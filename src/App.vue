<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title> Admin Panel - E|V </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" behavior="mobile" overlay>
      <div class="q-pa-sm">
        <q-list bordered separator dense padding>
          <q-item clickable v-ripple v-for="link in links" :key="link.id">
            <q-item-section>
              <router-link :to="link.to" class="r_link">{{
                link.title
              }}</router-link>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",

  components: {},

  data() {
    return {
      left: false,
      links: [
        { to: "/", title: "Home" },
        { to: "/roles", title: "Roles" },
        { to: "/users", title: "Users" },
        { to: "/categories", title: "Categories" },
        { to: "/subcategories", title: "SubCategories" },
        { to: "/posts", title: "Posts" },
        { to: "/banners", title: "Banners" },
      ],
    };
  },
  methods: {},
  computed: {},
 created(){
    this.$store.dispatch('GET_ROLES')
    this.$store.dispatch('GET_USERS')
  }
};
</script>

<style scoped>
.r_link {
  text-decoration: none;
  color: black;
  font-size: 14pt;
}
</style>
