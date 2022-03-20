<template>
     <v-container> 
         <v-row justify="center">
            <v-col cols="4">  
                <v-img
                    src="https://i.ibb.co/jVTdNZY/design-cursive.png"
                    contain
                    max-width="700"
                />
             </v-col>
          </v-row>
          <v-row>
              <v-list style="background-color:#d8ecf3;">
                  <v-list-item>
                    <v-list-item-title class="title font-weight-thin">WEB/MOBILE</v-list-item-title>
                  </v-list-item>
            </v-list>
          </v-row>
          <v-row
            justify="center"
          >
            <v-col
                cols="12"
                lg="6"
            >
                <v-carousel
                    show-arrows
                    interval
                    cycle
                    touch
                    hide-delimiter-background
                    hide-delimiters
                >
                    <v-carousel-item
                        src="https://julielinzhou.files.wordpress.com/2019/04/title-page.png"
                    ></v-carousel-item>
                    <v-carousel-item
                        src="https://julielinzhou.files.wordpress.com/2019/04/macbook-pro.png"
                    ></v-carousel-item>
                    <v-carousel-item
                        src="https://julielinzhou.files.wordpress.com/2019/04/single-result.png"
                    ></v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col
                cols="12"
                lg="6"
            >
                <v-card>
                    <v-card-title>You Belong Here - Inclusive Space Search
                        <v-btn fab small text href="https://github.com/viv-chen/newpearlhacks19" target="_blank"><v-icon>mdi-github-circle</v-icon></v-btn>
                    </v-card-title>
                    <v-card-text>These were designs created for Pearl Hacks, a hackathon in North Carolina. 
                                    I collaborated with 3 other people to design mobile and web versions of a website that would serve as a safe-space finder for LGBTQ+ and allies alike. 
                                    I participated in UI research and helping to design the site layouts above in Figma. 
                                    Although we do not have a fully functioning website, we programmed static pages and incorporated a Google Maps API so that users could place markers on different locations that they found to be a safe-space or not a safe-space (code available in the github link above). I would summarize this design as a Yelp but with an emphasis on community, rather than businesses.</v-card-text>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Detailed process</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col cols="6" @click="showImg(14)">
                                        <v-img 
                                            src="https://julielinzhou.files.wordpress.com/2019/04/youbelongheredraft.png"
                                            class="img"
                                        />
                                    </v-col>
                                    <v-col cols="6">
                                        <div>Here is a first draft of my idea for the layout of the site. Some features are not seen in our final product but include a side-bar with icons, animated welcome page, overlay of search listings on the map, etc. Initially, I wanted the welcome screen to include a little survey that a user could take to personalize their experience on the website.</div>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>
          </v-row>
          <v-row>
           <v-col
            @click="showImg(0)"
            cols="4"
           >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/04/iphone-8.4.png"
                contain
               />
           </v-col>
           <v-col
            @click="showImg(1)"
            cols="4"
           >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/04/iphone-8.5.png"
                contain
               />
           </v-col>
           <v-col
            @click="showImg(2)"
            cols="4"
           >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/04/iphone-8.1.png"
                contain
               />
           </v-col>
          </v-row>
          <v-row justify="center">
            <v-col
                @click="showImg(3)"
                cols="12"
                md="5"
                class="d-flex"
            >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/05/domorewebsite.png"
           
               />
           </v-col>
           <v-col
                @click="showImg(4)"
                cols="12"
                md="5"
                class="d-flex"
            >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/07/home-page.png"       
               />
           </v-col>
           <v-col
                @click="showImg(5)"
                cols="12"
                md="2"
                class="d-flex"
            >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/05/loginscreen.png"
               />
           </v-col>
          </v-row>

          <v-row>
              <v-list style="background-color:#d8ecf3;">
                  <v-list-item>
                    <v-list-item-title class="title font-weight-thin">GRAPHIC DESIGN</v-list-item-title>
                  </v-list-item>
            </v-list>
          </v-row>
          <v-row>
            <v-col
                @click="showImg(6)"
                cols="6"
                md="3"
                class="d-flex"
            >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/01/aapifinal-3.gif"
               />
            </v-col>
            <v-col
                @click="showImg(7)"
                cols="6"
                md="3"
                class="d-flex"
            >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/01/aapride1.png"
               />
            </v-col>
            <v-col
                @click="showImg(8)"
                cols="6"
                md="3"
                class="d-flex"
            >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/01/aapride-21.png"
               />
            </v-col>
            <v-col
                @click="showImg(9)"
                cols="6"
                md="3"
                class="d-flex"
            >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/01/aapride-3.png"
               />
            </v-col>
          </v-row>
          <v-row>
            <v-col
                cols="12"
            >
                <v-card>
                    <v-card-title>AAPride: An Informational Campaign</v-card-title>
                    <v-card-text>
                        <p>AAPride for Asian Student Union at University of Virginia – This was a marketing campaign that I did for Pride Month (June), which celebrates LGBT rights and history, in 2018.
                         Since I was the marketing chair and I knew that pride month was coming up, I thought it would be neat to put out something informational while also boosting our organization’s social media presence. 
                         I posted all of these flyers on our Facebook page. 
                         The flyers (and posts go into more detail) feature some notable LGBT figures in the AAPI or Asian American Pacific Islander (APIDA or Asian Pacific Islander Desi American is actually a more inclusive term that is used more now) community.
                        </p>
                        <p> Links to Facebook pages: 
                            <a 
                                href="https://www.facebook.com/asuuva/videos/2142571032645807/?__xts__[0]=68.ARAtNpcNzDhxragwiyeATw9leJjz_2TXk817CcD7tLNYbGjMQA3ZNVf4axuVUs9s3QJwRGFd5mxyNPp23oxrKzEC3Z2jVvcELuf0eHJYDc31FF0HdagQGXDTSITZrud4HMEBELaGk5IWyeOQUcxoQN1BqMoaufNPr2XSLCccKPuhqKqwz02WzJRpK9ZTPtrTMEZPIWRMOfSFx7fa_iEtDfSMSGC1XJz1o_c8KpoGXxLOSce9Rmr5yumZ0_mnoAJ6lm-UKo7b9BG5_j-myziV1UD9a2nr41UZSw6vqiNjZ51HIp7Ar6lW3ztBgta4VM7N7NYbW9X2ukPFS0cTaCXLC6b898gJQfA3C_qHNjsNAsfhvypMob-CLI9-5hzL&__tn__=-R"
                                target="__blank"
                            >1 | </a>
                            <a
                                href="https://www.facebook.com/asuuva/photos/a.1983655835203995/2144476539121923/?type=3&theater"
                                target="__blank"
                            >2 | </a>
                            <a
                                href="https://www.facebook.com/asuuva/photos/a.1983655835203995/2145898738979703/?type=3&theater"
                                target="__blank"
                            >3 | </a>
                            <a
                                href="https://www.facebook.com/asuuva/photos/a.1983655835203995/2146896262213284/?type=3&theater"
                                target="__blank"
                            >4</a>
                        </p>
                    </v-card-text>
                 
                </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col
                @click="showImg(10)"
                cols="4"
                md="2"
                class="d-flex"
            >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/04/sah-exec-1.png"
               />
            </v-col>
            <v-col
                @click="showImg(11)"
                cols="8"
                md="4"
                class="d-flex"
            >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/03/sah-event1.png"
               />
            </v-col>
             <v-col
                @click="showImg(12)"
                cols="4"
                md="2"
                class="d-flex"
            >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/01/lunchwalumniinsta.png"
               />
            </v-col>
            <v-col
                @click="showImg(13)"
                cols="8"
                md="4"
                class="d-flex"
            >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/01/lunchwalumni.png"
               />
            </v-col>
          </v-row>
          <v-row>
              <v-list style="background-color:#d8ecf3;">
                  <v-list-item>
                    <v-list-item-title class="title font-weight-thin">MISCELLANEOUS</v-list-item-title>
                  </v-list-item>
            </v-list>
          </v-row>
          <v-row justify="center">
              <v-col
                cols="12"
                >
                  <v-card>
                      <div class="d-flex flex-no-wrap justify-space-between">
                          <div>
                            <v-card-title>iPhone Weather App: A UX Case Study</v-card-title>
                            <v-card-subtitle class="pb-0">Reconsidering the iPhone Weather App On-the-Go</v-card-subtitle>
                            <v-card-actions class="pb-0">
                            <v-btn 
                                text 
                                href="https://medium.com/@jz2qc/reconsidering-the-iphone-weather-app-on-the-go-a-ux-case-study-8bb88d624060" 
                                target="_blank"
                            >
                                Read Now
                            </v-btn>
                            </v-card-actions>
                          </div>
                        
                       <v-avatar
                            size="125"
                            class="ma-4"
                            tile
                        >
                          <v-img src="https://julielinzhou.files.wordpress.com/2019/06/split-screen2.png"/>
                      </v-avatar>
                      </div>
                  </v-card>
              </v-col>
          </v-row>
        <vue-easy-lightbox
            :visible="visible"
            :index="index"
            :imgs="design"
            @hide="handleHide"
        ></vue-easy-lightbox>
    </v-container>
</template>
<script>
export default {
    name: 'Design',
    data: () => ({
        design: ["https://julielinzhou.files.wordpress.com/2019/04/iphone-8.4.png",
            "https://julielinzhou.files.wordpress.com/2019/04/iphone-8.5.png",
            "https://julielinzhou.files.wordpress.com/2019/04/iphone-8.1.png",
            "https://julielinzhou.files.wordpress.com/2019/05/domorewebsite.png", 
            "https://julielinzhou.files.wordpress.com/2019/07/home-page.png", 
            "https://julielinzhou.files.wordpress.com/2019/05/loginscreen.png",
            "https://julielinzhou.files.wordpress.com/2019/01/aapifinal-3.gif", 
            "https://julielinzhou.files.wordpress.com/2019/01/aapride1.png", 
            "https://julielinzhou.files.wordpress.com/2019/01/aapride-21.png", 
            "https://julielinzhou.files.wordpress.com/2019/01/aapride-3.png", 
            "https://julielinzhou.files.wordpress.com/2019/04/sah-exec-1.png", 
            "https://julielinzhou.files.wordpress.com/2019/03/sah-event1.png", 
            "https://julielinzhou.files.wordpress.com/2019/01/lunchwalumniinsta.png", 
            "https://julielinzhou.files.wordpress.com/2019/01/lunchwalumni.png",
            "https://julielinzhou.files.wordpress.com/2019/04/youbelongheredraft.png"],
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
a {
    text-decoration: none;
}
</style>