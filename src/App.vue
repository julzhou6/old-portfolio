<template>
  <v-app style="background-color:#d8ecf3;">
    <v-app-bar
      color="red lighten-2"
      collapse
      app
    >
      <v-row>
        <router-link to="/">
          <v-img src="https://i.ibb.co/41sk382/me-icon-2.png" 
                max-width="60"
          />
        </router-link>
      </v-row>
      <v-spacer/>
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <router-view></router-view>
      <!-- Navigation Drawer -->
      <v-navigation-drawer 
        v-model="drawer"
        color="red lighten-2"
        absolute
        bottom
        temporary
      >
        <v-list nav>
          <v-list-item
            v-for="i in items"
            :key="i.name"
            :to="{path: '/'+ i.name}"
          >
            <v-list-item-icon>
              <v-icon>{{ i.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{i.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item class="justify-space-around">
              <v-btn fab small text href="mailto:julielinzhou@gmail.com"><v-icon>mdi-email</v-icon></v-btn>
              <v-btn fab small text href="https://www.linkedin.com/in/julielinzhou/" target="_blank"><v-icon>mdi-linkedin</v-icon></v-btn>
              <v-btn fab small text href="https://www.twitter.com/julieqiuli" target="_blank"><v-icon>mdi-twitter</v-icon></v-btn>
              <v-btn fab small text href="https://www.instagram.com/julieqiuli" target="_blank"><v-icon>mdi-instagram</v-icon></v-btn>
          </v-list-item>
          <v-list-item class="justify-center">
             <v-btn text fab small href="https://github.com/julzhou6" target="_blank"><v-icon>mdi-github-circle</v-icon></v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-footer padless> 
         <v-col
          class="text-center"
          cols="12"
        >
        © {{ new Date().getFullYear() }} <strong>Julie Zhou</strong>
    </v-col>
      </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Lightbox from 'vue-easy-lightbox'

Vue.use(Lightbox)
Vue.use(BootstrapVue)

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    mini: true,
    items: [
        {name: 'Animation', icon:'mdi-movie-roll'}, 
        {name: 'Code', icon:'mdi-file-code'},
        {name: 'Design', icon:'mdi-drawing'}, 
        {name: 'Illustration', icon:'mdi-draw'}
    ]
  }),
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>