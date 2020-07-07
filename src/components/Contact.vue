<template>
  <v-container>
    <v-row justify="center pt-4">
      <v-col cols="12">
        <v-card class="pa-2">
          <v-card-title>Let's Talk!</v-card-title>
          <v-row justify="center">
            <v-img src="https://i.ibb.co/41sk382/me-icon-2.png" max-width="300" />
          </v-row>
          <v-card-text>For any questions, work opportunities, and more, you can reach me through my email:</v-card-text>
          <v-list>
            <v-list-item class="justify-center">
              <v-icon>mdi-email</v-icon>
              <span class="pa-2">julielinzhou@gmail.com</span>
            </v-list-item>
          </v-list>
          <v-card-text>And find me in other places:</v-card-text>
          <v-list>
            <v-list-item class="justify-space-around">
              <v-btn fab text href="https://www.linkedin.com/in/julielinzhou/" target="_blank">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn fab text href="https://www.twitter.com/julieqiuli" target="_blank">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn fab text href="https://www.instagram.com/julieqiuli" target="_blank">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn fab text href="https://github.com/julzhou6" target="_blank">
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Contact"
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>