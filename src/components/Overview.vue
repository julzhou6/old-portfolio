<template>
    <v-container fluid style="background-color:#d8ecf3;">
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-card>
            <v-tabs
              center-active
              grow
              background-color="red lighten-2"
            >
                <v-tab>
                  <v-img src="https://i.ibb.co/pPHvdk6/animation-cursive.png"
                    contain
                    max-width="150"/>
                </v-tab>
                <v-tab>
                  <v-img
                    src="https://i.ibb.co/Vg0DyLL/code-cursive.png"
                    contain
                    max-width="95"
                />
                </v-tab>
                <v-tab>
                   <v-img
                    src="https://i.ibb.co/jVTdNZY/design-cursive.png"
                    contain
                    max-width="90"
                />
                </v-tab>
                <v-tab>
                  <v-img
                    src="https://i.ibb.co/RQSTdwn/illustration-cursive.png"
                    contain
                    max-width="140"
                />
                </v-tab>

                <v-tab-item
                >
                  <v-container fluid>
                    <v-row justify="center">
                      <v-col
                        @click="showImg(0)"
                        cols="12"
                        md="4"
                      >
                       <v-img
                          class="img"
                          src="https://julielinzhou.files.wordpress.com/2020/01/inspiration.gif"
                          height="270"
                        />
                      </v-col>
                      <v-col
                        @click="showImg(1)"
                        cols="12"
                        md="4"
                      >
                        <v-img
                          class="img"
                          src="https://julielinzhou.files.wordpress.com/2019/01/aapride-1.gif"
                          height="270"
                        />
                      </v-col>
                       <v-col
                        @click="showImg(2)"
                        cols="12"
                        md="4"
                      >
                        <v-img
                          class="img"
                          src="https://julielinzhou.files.wordpress.com/2020/01/coffee.gif"
                          height="270"
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
                </v-tab-item>

                 <v-tab-item>
                  <v-container fluid>
                    <v-row>
                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-card>
                        <v-card-title>
                            Creating Personal Portfolio Website with Vue
                            <v-btn fab small text href="https://github.com/julzhou6/julzhou6.github.io" target="_blank"><v-icon>mdi-github-circle</v-icon></v-btn>
                        </v-card-title>
                        <v-divider class="mt-0 mb-0"/>
                        <v-card-subtitle class="font-weight-bold subtitle-1">Summary</v-card-subtitle>
                        <v-card-text class="pb-0">
                            <p class="ma-0">After gaining some experience with web development through my part-time job, I thought I 
                            could build myself a website after being unsatisfied with the customization of website builders.
                            This was built with a Vue app with Vuetify and BootstrapVue libraries.
                            </p>
                        </v-card-text>
                        <v-card-subtitle class="font-weight-bold subtitle-1 pb-0">Key Learning Points</v-card-subtitle>
                        <v-card-text class="pb-0">
                            <v-list class="pt-0 pb-0">
                                <v-list-item>
                                        <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                        <v-list-item-title class="body-2">Increased familiarity with Vue styling options</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                        <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                        <v-list-item-title class="body-2">Exploration of Vue libraries and tools</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                        <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                        <v-list-item-title class="body-2">Creative freedom with personalization of site</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="font-weight-bold">More Details</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-card-text class="pb-0">
                                        <p>I started out by sketching some things I envisioned my site to have. 
                                            I knew I had to have specific sections for each of my work such as animation and code.
                                            Here are a few of my sketches below. 
                                        </p>
                                    </v-card-text>
                                    <v-row>
                                        <v-col 
                                            @click="showImg(0)"
                                            cols="3" 
                                            class="pt-0 pb-0"
                                        >
                                            <v-img
                                                class="img"
                                                src="https://julielinzhou.files.wordpress.com/2020/01/scannable-document-on-jan-2-2020-at-7-29-00-pm-2.jpg"
                                                height="115"
                                            />
                                        </v-col>
                                        <v-col 
                                            @click="showImg(1)"
                                            cols="6" 
                                            class="pt-0 pb-0"
                                        >
                                            <v-img
                                                class="img"
                                                src="https://julielinzhou.files.wordpress.com/2020/01/scannable-document-3-on-jan-2-2020-at-7-29-00-pm-2.jpg"
                                                height="115"
                                            />
                                        </v-col>
                                        <v-col 
                                            @click="showImg(2)"
                                            cols="3" 
                                            class="pt-0 pb-0"
                                        >
                                            <v-img
                                                class="img"
                                                src="https://julielinzhou.files.wordpress.com/2020/01/scannable-document-2-on-jan-2-2020-at-7-29-00-pm.png"
                                                height="115"
                                            />
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-card-text>
                                            <p> I think the hardest challenge I faced when working on this site was knowing what to leave in and what to 
                                                leave out. I wanted the website to look good but also I didn't want it to feel overcrowded or like it as 
                                                arranged in a way that confused the eye. Formatting was a bit of struggle as was dealing with the number of
                                                images that I had to use with the site but I learned to have fun with it. I also decided that I wanted to add my
                                                personal touch to the site somehow and that was through writing all of the page headers and using my art as the favicon
                                                and home button. Github might not be the best host for maintaining a website but I wanted an easy, free way to host 
                                                my website, so I am pretty satisfied with how it turned out.
                                            </p>
                                        </v-card-text>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                      </v-card>
                      </v-col>
                       <v-col
                        cols="12"
                        md="6"
                      >
                        <v-card>
                    <v-card-title>
                        Creating Dashboards in Vue
                        <v-btn fab small text href="https://github.com/julzhou6/React-App" target="_blank"><v-icon>mdi-github-circle</v-icon></v-btn>
                    </v-card-title>
                    <v-divider class="mt-0 mb-0"/>
                   
                            <v-card-subtitle class="font-weight-bold subtitle-1">Summary</v-card-subtitle>
                            <v-card-text class="pb-0">
                                <p class="ma-0">When I came into my internship over the summer of 2019, I had little experience with HTML/CSS and Javascript so I practiced 
                                by creating user dashboards in Vue, which helped me in working with other frameworks such as React.
                                </p>
                            </v-card-text>
                            <v-card-subtitle class="font-weight-bold subtitle-1 pb-0">Key Learning Points</v-card-subtitle>
                            <v-card-text class="pb-0">
                                <v-list class="pt-0 pb-0">
                                    <v-list-item>
                                            <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                            <v-list-item-title class="body-2">Responsive Web Design (breakpoints, spacing, formatting, etc.)</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                            <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                            <v-list-item-title class="body-2">Using Axio API calls</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                            <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                            <v-list-item-title class="body-2">Vue-specific features usch as Vue Router, computed properties, etc.</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                      
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="font-weight-bold">More Details</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-card-text>
                                    <p>
                                        Below, I’ll explain the process of creating a dashboard that contains different elements below. 
                                        Before I started creating this web app, I had very vague knowledge of how web apps worked and some knowledge of HTML/CSS/Javascript. 
                                        I went through several Vue tutorials, such as the Vue Mastery courses provided from the developers themselves, which helped me better understand using links, differences between a single-page application vs a multiple page application, implementing an API, etc.
                                    </p>
                                    <p>
                                        Some background on this dashboard: this is the in-progress dashboard of a in-development game. 
                                        This dashboard will allow a player to look through the different policies attributed to different roles (e.g. “Prime Minister”, “Minister of Labor”, “Minister of Health”, and so on) and to select from a couple of options on how they would like to enact that policy. 
                                        For a demonstration of how this was implemented in past games, you can check out the <a href="https://www.clsgbatten.org/" target="__blank">CLSG website</a>.
                                    </p>
                                </v-card-text>
                                <v-row>
                                    <v-col 
                                        @click="showImg(3)"
                                        cols="12" 
                                        class=" pt-0 pb-0"
                                    >
                                        <v-img
                                            class="img"
                                            src="https://julielinzhou.files.wordpress.com/2019/07/screen-shot-2019-07-16-at-2.55.19-pm-1.png"
                                            contain
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-card-text>
                                        <p>Above, you can see the main features of the dashboard, there is a toolbar at the top of the app, along with the two constant collapse/expansion panels “Graphs” and “City Metrics”. 
                                            The graphs were created with random data and using <a href="https://vue-chartjs.org/" target="__blank">vue-chartjs</a> which is a wrapper for Chart.js in Vue. 
                                            I created a separate component for the graphs and called it twice on this page.
                                        </p>
                                        <p>Below that, I have tabs of different “Sectors” and their metrics, as well as the “Roles” expansion panels.
                                        </p>
                                    </v-card-text>
                                </v-row>
                                 <v-row>
                                    <v-col cols="12" class="pt-0 pb-0">
                                        <v-img
                                            @click="showImg(4)"
                                            class="img"
                                            src="https://julielinzhou.files.wordpress.com/2019/07/screen-shot-2019-07-16-at-2.56.51-pm.png"
                                            contain
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-card-text>
                                        <p>Inside of each panel, I have nested the expansion panels for each “Policy” as well as a drop-down select box. 
                                            All of the “Roles” information was taken from an external API.
                                        </p>
                                        <p>
                                            The default values of the select boxes are saved in a Vuex store and are displayed when the page is first loaded.
                                        </p>
                                    </v-card-text>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
                      </v-col>
                    </v-row>
                     <vue-easy-lightbox
                        :visible="visible"
                        :index="index"
                        :imgs="code"
                        @hide="handleHide"
                      ></vue-easy-lightbox>
                  </v-container>
                </v-tab-item>

                 <v-tab-item
                >
                  <v-container fluid class="justify-center">
                    <v-row justify="center" class="d-flex">
                     <!-- <v-col 
                      v-for="(src, index) in designs"
                      :key="index"
                      @click="showImg(index)"
                      > -->
                      <v-col 
                        @click="showImg(0)"
                        cols="12"
                        md="4"
                      >
                        <v-img class="img" src="https://julielinzhou.files.wordpress.com/2019/04/sah-exec.png"/>
                     </v-col>
                     <v-col 
                        @click="showImg(1)"
                        cols="12"
                        md="8"
                      >
                        <v-img class="img" src="https://julielinzhou.files.wordpress.com/2019/05/sah-event1-2.png"/>
                     </v-col>
                     <v-col 
                        @click="showImg(2)"
                        cols="12"
                        md="6"
                      >
                        <v-img 
                          class="img"
                          src="https://julielinzhou.files.wordpress.com/2019/05/domorewebsite-2.png"
                          height="465"
                        />
                     </v-col>
                     <v-col 
                        @click="showImg(3)"
                        cols="12"
                        md="6"
                      >
                        <v-img class="img"
                          src="https://julielinzhou.files.wordpress.com/2019/07/home-page.png"
                          height="465"
                        />
                     </v-col>
                    </v-row>
                    <vue-easy-lightbox
                        :visible="visible"
                        :index="index"
                        :imgs="designs"
                        @hide="handleHide"
                      ></vue-easy-lightbox>
                  </v-container>
                </v-tab-item>

                 <v-tab-item
                >
                  <v-container fluid>
                    <v-row class="align-start">
                      <v-col
                        @click="showImg(0)"
                        class="d-flex child-flex"
                        cols="12"
                        md="4"
                      >
                        <v-card flat class="d-flex">
                          <v-img
                            class="img"
                            src="https://julielinzhou.files.wordpress.com/2019/01/momandme-3.png"
                            height="610"
                          />
                        </v-card>
                      </v-col>
                      <v-col
                        sm="12"
                        md="4"
                      >
                      <v-row 
                        @click="showImg(1)"
                      >
                        <v-card flat class="d-flex">
                          <v-img
                            class="img"
                            src="https://julielinzhou.files.wordpress.com/2019/01/blasiancharacterdesign-1.png"
                            height="300"
                          />
                        </v-card>
                      </v-row>
                      <v-row 
                        @click="showImg(2)"
                        class="mt-3"
                      >
                        <v-card flat class="d-flex">
                          <v-img
                            class="img"
                            src="https://julielinzhou.files.wordpress.com/2020/01/depression_withsig.png"
                            height="300"
                          />
                        </v-card>
                      </v-row>
                      </v-col>
                      <v-col
                        @click="showImg(3)"
                        class="d-flex child-flex"
                        cols="12"
                        md="4"
                      >
                        <v-card flat class="d-flex">
                          <v-img
                            class="img"
                            src="https://julielinzhou.files.wordpress.com/2019/01/1546626626099-1.jpg"
                            height="610"
                          />
                        </v-card>
                      </v-col>
                    </v-row>
                     <vue-easy-lightbox
                        :visible="visible"
                        :index="index"
                        :imgs="art"
                        @hide="handleHide"
                      ></vue-easy-lightbox>
                  </v-container>
                </v-tab-item>   
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'Overview', 
    data: () => ({
      designs: ["https://julielinzhou.files.wordpress.com/2019/04/sah-exec.png", 
        "https://julielinzhou.files.wordpress.com/2019/05/sah-event1-2.png",
        "https://julielinzhou.files.wordpress.com/2019/05/domorewebsite-2.png", 
        "https://julielinzhou.files.wordpress.com/2019/07/home-page.png"],
      art: ["https://julielinzhou.files.wordpress.com/2019/01/momandme-3.png", 
        "https://julielinzhou.files.wordpress.com/2019/01/blasiancharacterdesign-1.png", 
        "https://julielinzhou.files.wordpress.com/2020/01/depression_withsig.png",
        "https://julielinzhou.files.wordpress.com/2019/01/1546626626099-1.jpg"
        ],
      animation: ["https://julielinzhou.files.wordpress.com/2020/01/inspiration.gif",
        "https://julielinzhou.files.wordpress.com/2019/01/aapride-1.gif", 
        "https://julielinzhou.files.wordpress.com/2020/01/coffee.gif"
        ],
      code: ["https://julielinzhou.files.wordpress.com/2020/01/scannable-document-on-jan-2-2020-at-7-29-00-pm-2.jpg", 
        "https://julielinzhou.files.wordpress.com/2020/01/scannable-document-3-on-jan-2-2020-at-7-29-00-pm-2.jpg", 
        "https://julielinzhou.files.wordpress.com/2020/01/scannable-document-2-on-jan-2-2020-at-7-29-00-pm.png", 
        "https://julielinzhou.files.wordpress.com/2019/07/screen-shot-2019-07-16-at-2.55.19-pm-1.png", 
        "https://julielinzhou.files.wordpress.com/2019/07/screen-shot-2019-07-16-at-2.56.51-pm.png"],
      visible: false, 
      index: 0
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