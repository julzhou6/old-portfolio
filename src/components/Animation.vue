<template>
    <v-container fluid>  
         <v-row justify="center">
             <v-col cols="4">
                <v-img
                    src="https://i.ibb.co/pPHvdk6/animation-cursive.png"
                    contain
                    max-width="700"
                />
             </v-col>
          </v-row>
          <v-row justify="center">
              <v-col cols="12" md="6">
                <b-embed
                    type="iframe"
                    aspect="16by9"
                    src="https://www.youtube.com/embed/eYTxCWtZb5c" 
                ></b-embed>
              </v-col>
              <v-col cols="12" md="6">
                <v-card>
                  <v-card-title>Inspiration</v-card-title>
                  <v-card-text>
                    <p>The spherical character in the animation tries to think of an interesting idea or concept but gets frustrated at being unable to think of anything. 
                    I think any creative person has hit this wall before; nothing seems to click and you feel like you aren’t doing anything productive. 
                    But as you will see in the clip, something unexpected happens, and suddenly inspiration hits. 
                    I tried to convey through this short that the really great songs, poems, inventions, animations, etc. don’t come at will but rather are cultivated over time, just like the flowers in the clip.
                    </p>
                    <p>
                    This is the final project I made for my animation class in 2018. 
                    This course was pretty fast paced — only about 5 weeks to complete the assignments then the last 2 weeks were working on the conception and animating our final project. 
                    I explored a lot of different aspects throughout my assignments but in this final project I put more emphasis on storytelling through the cuts and camera angles.
                    </p>
                    </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col
                @click="showImg(0)"
                cols="4"
                class="d-flex"
              >
                <v-img
                  class="img"
                  src="https://julielinzhou.files.wordpress.com/2019/01/wakeup0299.png"
                />
              </v-col>
              <v-col
                @click="showImg(1)"
                cols="4"
                class="d-flex"
              >
                <v-img
                  class="img"
                  src="https://julielinzhou.files.wordpress.com/2019/01/eatingthinking0060.png"
                />
              </v-col>
              <v-col
                @click="showImg(2)"
                cols="4"
                class="d-flex"
              >
                <v-img
                  class="img"
                  src="https://julielinzhou.files.wordpress.com/2019/01/scene10775-1.png"
                />
              </v-col>
            </v-row>
            <v-divider/>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <b-embed
                    type="iframe"
                    aspect="16by9"
                    src="https://youtube.com/embed/N1dwZJi0QfY"
                ></b-embed>
              </v-col>
               <v-col cols="12" md="6">
                <v-card>
                  <v-card-title>Take it slow.</v-card-title>
                  <v-card-text>
                    <p>
                      In this animation, I wanted to explore the idea of how it is so common to lead a fast-paced life, especially seeing other people around you being busy, to the extent of being burnt out. 
                      I tried to visualize this process by using a lot of cuts and fast-paced animation to create tension and contrast this with a slowed down version and less cuts of the same scenes. 
                      I also utilized the rotoscoping technique to create a sense of urgency by drawing more shaky lines.
                    </p>
                    <p>
                      In order to give context to some of the fast-paced scenes, I used a lot of sounds of everyday objects and actions as well as put backgrounds for some of them to set the scene. 
                      Additionally, I started off with some scenes in monotone and transitioned them to have more color by the end to represent how sometimes by being too busy or burnt out that it is hard to really notice the beauty of your surroundings. 
                      If I were to further work on this animation, I would try to explore more styles, such as varying my linework, in order to find more ways to create this tension.
                    </p>
                    <p>  
                      Fun fact: I stayed up until 5 AM working on this for my New Media class. That made me realize that I don't have the energy to deal 
                      with the repercussions of procrastinating anymore. Good life lessons came out of this.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                @click="showImg(3)"
                cols="4"
                class="d-flex"
              >
                <v-img
                  class="img"
                  src="https://julielinzhou.files.wordpress.com/2020/01/sunrise.gif"
                />
              </v-col>
              <v-col
                @click="showImg(4)"
                cols="4"
                class="d-flex"
              >
                <v-img
                  class="img"
                  src="https://julielinzhou.files.wordpress.com/2020/01/citywalk.gif"
                />
              </v-col>
              <v-col
                @click="showImg(5)"
                cols="4"
                class="d-flex"
              >
                <v-img
                  class="img"
                  src="https://julielinzhou.files.wordpress.com/2020/01/coffee.gif"
                />
              </v-col>
            </v-row>
            <v-row>
               <v-col
                @click="showImg(6)"
                cols="6"
                class="d-flex"
              >
                <v-img
                  class="img"
                  src="https://julielinzhou.files.wordpress.com/2020/01/clockwalk.gif"
                />
              </v-col>
              <v-col
                @click="showImg(7)"
                cols="6"
                class="d-flex"
              >
                <v-img
                  class="img"
                  src="https://julielinzhou.files.wordpress.com/2020/01/crosswalk.gif"
                />
              </v-col>
            </v-row>
            <vue-easy-lightbox
                :visible="visible"
                :index="index"
                :imgs="animation"
                @hide="handleHide"
            ></vue-easy-lightbox>
    </v-container>
</template>
<script>
export default {
    name: 'Animation', 
    data: () => ({
        animation: [
          "https://julielinzhou.files.wordpress.com/2019/01/wakeup0299.png", 
          "https://julielinzhou.files.wordpress.com/2019/01/eatingthinking0060.png", 
          "https://julielinzhou.files.wordpress.com/2019/01/scene10775-1.png", 
          "https://julielinzhou.files.wordpress.com/2020/01/sunrise.gif", 
          "https://julielinzhou.files.wordpress.com/2020/01/citywalk.gif", 
          "https://julielinzhou.files.wordpress.com/2020/01/coffee.gif", 
          "https://julielinzhou.files.wordpress.com/2020/01/clockwalk.gif", 
          "https://julielinzhou.files.wordpress.com/2020/01/crosswalk.gif"
        ],
        visible: false, 
        index: 0, 
  }), 
  methods: {
      handleHide() {
        this.visible = false;
      },
      showImg(index) {
        this.index = index;
        this.visible = true;
      }
    }
}
</script>
<style scoped>
.img:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0);
  transform: scale(1.01);
  cursor: pointer;

}
img {
    width: 100%;
    transition: 0.3s ease;
}
</style>