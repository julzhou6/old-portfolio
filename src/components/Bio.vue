<template>
    <v-container>
      <v-row class="justify-center align-center">
        <v-col cols="12" lg="4" md="5" class="mr-3">
          <v-row class="justify-center align-self-center">
           
              <!-- <v-img
                src="https://i.ibb.co/SB50d8j/dec2019me2.png"
                max-width="500"
              /> -->
              <b-img
                src="https://i.ibb.co/yXzjnBj/dec2019me-square.png"
                rounded="circle"
                thumbnail
                v-bind="mePic"
                style="height:50%;"
              >
              </b-img>
         
          </v-row>
        </v-col>
        <v-col cols="12" lg="5" md="6">
          <v-row class="justify-center align-center">
            <v-card>
              <v-card-title>Passionate and Motivated</v-card-title>
              <v-card-text>
                Hello, I'm Julie and I'm a third-year student studying Computer Science and Media Studies 
                at the University of Virginia. I am passionate about web/mobile development, design, animation, and the arts. 
              </v-card-text>
              <v-col align="start">
                <a href="./assets/Zhou_Julie_Resume.pdf" download><v-btn color="red lighten-2">Download Resume</v-btn></a>
              </v-col>
              <v-divider/>
              <v-card-title class="pb-0">Qualities</v-card-title>
              <v-row>
                <v-col
                  cols="4"
                >
                  <v-img
                    src="https://julielinzhou.files.wordpress.com/2020/01/firsttrait.png"
                    contain
                    height="100"
                  />
                </v-col>
                <v-col
                  cols="4"
                >
                  <v-img
                    src="https://julielinzhou.files.wordpress.com/2020/01/secondtrait.png"
                    contain
                    height="100"
                  />
                </v-col>
                <v-col
                  cols="4"
                >
                  <v-img
                    src="https://julielinzhou.files.wordpress.com/2020/01/thirdtrait.png"
                    contain
                    height="100"
                  />
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="4">
                  <v-card-text class="text-center pt-0">Self-starter</v-card-text>
                </v-col>
                <v-col cols="4">
                  <v-card-text class="text-center pt-0">Curious</v-card-text>
                </v-col>
                <v-col cols="4">
                  <v-card-text class="text-center pt-0">Challenger</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'Bio', 
    data: () => ({
      mePic: {
        width: 350
      }
  }),
}
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>