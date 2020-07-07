<template>
        <v-container fluid>
          <!-- My Name/Website title -->
          <v-row justify="center">
              <v-col cols="4">
                    <v-img 
                        src="https://i.ibb.co/DWbF8tm/name-cursive.png"
                        max-width="700"
                        contain
                    />
              </v-col>
          </v-row>
          <Bio />
          <Overview />
          <Contact />
        </v-container>
</template>

<script>
import Bio from './Bio.vue';
import Overview from './Overview.vue';
import Contact from './Contact.vue';

export default {
    name: 'Home', 
    components: {
        Bio, Overview, Contact
    }
}
</script>