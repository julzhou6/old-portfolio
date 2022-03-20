<template>
     <v-container> 
         <v-row justify="center">
            <v-col cols="4">
                <v-img
                    src="https://i.ibb.co/Vg0DyLL/code-cursive.png"
                    contain
                    max-width="700"
                />
             </v-col>
          </v-row>
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
                        Adding Features in React and Django
                    </v-card-title>
                    <v-divider class="mt-0 mb-0"/>
                   
                            <v-card-subtitle class="font-weight-bold subtitle-1">Summary</v-card-subtitle>
                            <v-card-text class="pb-0">
                                <p class="ma-0">During the Fall 2019 semester, I worked part-time on adding new features
                                to my workplace's past simulation game and website. These features are not yet deployed but the website and game 
                                can be viewed here: <a>CLSG</a> and <a>Host Nations</a>.
                                These two projects were fairly intertwined and I learned a lot about working with SQL databases, local servers, and Django apps.
                                </p>
                            </v-card-text>
                            <v-card-subtitle class="font-weight-bold subtitle-1 pb-0">Key Learning Points</v-card-subtitle>
                            <v-card-text class="pb-0">
                                <v-list class="pt-0 pb-0">
                                    <v-list-item>
                                            <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                            <v-list-item-title class="body-2">Working with both front-end and back-end through API calls</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                            <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                            <v-list-item-title class="body-2">Increased familiarity with Javascript and React framework</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                            <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                            <v-list-item-title class="body-2">Pride in making pivotal changes to simulation games</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                      
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="font-weight-bold">More Details</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-card-text class="pb-0">
                                    <p>Note: My changes are not yet deployed on the websites yet and I'm away from school so I 
                                        am unable to include screenshots at the moment. I will update this with screenshots soon. 
                                    </p>
                                </v-card-text>
                                <v-card-subtitle class="pt-0 subtitle-1"><a href="http://hostnations.batten.virginia.edu/">Host Nations</a></v-card-subtitle>
                                <v-card-text>
                                    <p> The game I worked on primarily was Host Nations, which allows players to act as a country receiving migrants
                                        and can enact different policies that will affect the amount of support migrants get in their country.
                                        <a href="https://www.clsgbatten.org/simulations">More details here.</a>
                                    </p>
                                    <p>One of the most challenging features I worked on was randomly assigning a role to a different country each round. 
                                        This role was the ATG President and we thought that if each nation took a turn having an ATG President in their team 
                                        it would make the game more dynamic. Here, I had to randomly pick a country in the back-end of the website (built in Django),
                                        assign it as the current nation with an ATG president, and pass that value to the front-end (in React). It was the 
                                        communication between the front-end and back-end I struggled with so this was a very valuable experience for me when I 
                                        finally figured it out.
                                    </p>
                                    <p> Other features included adding colored nation metrics (green for high metrics, red for low metrics)
                                        to give a more visual indicator of how players were doing in the game and allowing comma input into input boxes.
                                    </p>
                                    <p>Another project I was working on was launching various simulation games through my works main website: www.clsgbatten.org/. 
                                        When an instructor logs in onto the website, they have the ability to create a new class and start a new game from the selection
                                        of simulations so integrating the other standalone simulations to be integrated onto the website provides more access for these simulations
                                        to be used in a classroom environment. 
                                    </p>
                                </v-card-text>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
              </v-col>
          </v-row>
           <v-row>
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
              <v-col
                cols="12"
                md="6"
            >
                <v-card>
                    <v-card-title>
                         Measuring Zonal Winds of Jupiter on Decadal Timescales
                    </v-card-title>
                    <v-divider class="mt-0 mb-0"/>
            
                                <v-card-subtitle class="font-weight-bold subtitle-1">Summary</v-card-subtitle>
                                <v-card-text class="pb-0">
                                    <p>I am thankful to be able to have had this great opportunity in 2016-17 to aid the Atmospheric and Planetary Sciences department at Hampton University in their research.
                                        I was mentored by an Associate Professor, Dr. William Moore, and John Blalock, then a graduate student, who helped answer any questions I had.
                                    </p>  
                                    <p class="ma-0">The context for this is that there have been several studies analyzing the images of Jupiter taken by the Cassini satellite but there hasn’t been a solid study conducted with the New Horizons LORRI images. 
                                    The purpose of my research was to first confirm the values attained for the Cassini image sets (thus validating the analysis technique) and then analyze the images taken by the LORRI. 
                                    </p>
                                </v-card-text>
                                <v-card-subtitle class="font-weight-bold subtitle-1 pb-0">Key Learning Points</v-card-subtitle>
                                <v-card-text class="pb-0 pr-0">
                                    <v-list class="pt-0 pb-0 pr-0">
                                        <v-list-item class="pr-0">
                                                <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                                <v-list-item-title class="body-2">First introduction to Linux OS and Bash</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item>
                                                <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                                <v-list-item-title class="body-2">Started with little to no field knowledge</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item>
                                                <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                                <v-list-item-title class="body-2">Wrote research paper and presented on topic</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-card-text>
                     
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="font-weight-bold">More Details</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-card-subtitle class="font-weight-bold subtitle-1">Key Features</v-card-subtitle>
                                    <v-card-text class="pb-0">
                                        <ul>    
                                            <li>Image Processing</li>
                                            <li>Calculating Wind Speeds</li>
                                            <li>Graphing Wind Speeds</li>
                                        </ul>
                                    </v-card-text>
                                </v-row>
                                <v-row>
                                     <v-col cols="12" class="pb-0">
                                        <v-img
                                            @click="showImg(5)"
                                            class="img"
                                            src="https://julielinzhou.files.wordpress.com/2019/01/mentorshipsteps.png"
                                            contain
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-card-text class="pb-0">
                                        <p>Below is sample of a processed and projected image. 
                                        This step is needed to eliminate as much distortion and other factors that could be caused by the camera and not necessarily has to do with the planet itself.
                                        </p>
                                    </v-card-text>
                                </v-row>
                                 <v-row>
                                     <v-col 
                                        @click="showImg(6)"
                                        cols="12"
                                     >
                                        <v-img
                                            class="img"
                                            src="https://julielinzhou.files.wordpress.com/2019/01/projected-cassini-1.png"
                                            contain
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-card-text class="pb-0">
                                        <p>I was introduced to a method for calculating wind velocities through images called Correlation Image Velocimetry (CIV), which tracks the distance a cloud moves (through coordinate points) and takes the average of the distances over time to determine the speed.
                                        </p>
                                        <p>
                                            <a href="https://ui.adsabs.harvard.edu/abs/2018DPS....5050305B/abstract">
                                                Published Division of Planetary Sciences 2018 Abstract</a>
                                        </p>
                                    </v-card-text> 
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
              </v-col>
          </v-row>
          <v-row>
            <v-col
                cols="12"
            >
                 <v-card>
                    <v-card-title>
                        A Simulation on the Effect of a Major World War on the Population of the World
                        <v-btn fab small text href="https://github.com/julzhou6/war-model" target="_blank"><v-icon>mdi-github-circle</v-icon></v-btn>
                    </v-card-title>
                    <v-divider class="mt-0 mb-0"/>
                    
                            <v-card-subtitle class="font-weight-bold subtitle-1">Summary</v-card-subtitle>
                            <v-card-text class="pb-0">
                                <p>This is a project that I undertook along with a partner, Winnie Zhang, in my senior year of high school. 
                                    The conception of this project happened because we were selected to represent our magnet school, Governor’s School for Science and Technology in a program called Future Leaders Pavilion at a military convention in Orlando, FL called Interservice/Industry Training, Simulation and Education Conference (I/ITSEC).
                                    This simulation was created in NetLogo, which is an agent-based modeling software, and used a free world map shapefile, which stored attributes for every pixel (such a population) from the Natural Earth database in order to produce the visual changes in the simulation.
                                </p>
                            </v-card-text>
                            <v-card-subtitle class="font-weight-bold subtitle-1 pb-0">Key Learning Points</v-card-subtitle>
                            <v-card-text class="pb-0">
                                <v-list class="pt-0 pb-0">
                                    <v-list-item>
                                            <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                            <v-list-item-title class="body-2">Challenged myself to research a difficult topic</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                            <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                            <v-list-item-title class="body-2">Presented at a conference and published a research paper</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                            <v-list-item-icon><v-icon>mdi-star</v-icon></v-list-item-icon>
                                            <v-list-item-title class="body-2">Exchanging ideas and working closely with a partner</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                      
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="font-weight-bold">More Details</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-card-text>
                                        <p>The initial question we had was whether or not it would be possible to predict the changes in population of the world if a World War III were to occur. 
                                        We did not include a lot of factors such as political ties or nuclear weaponry due to the limited time we had and its complexity. 
                                        First we gathered current population stats for every country and inputted them into the map shapefile. Next, we based the simulation’s “warfare” on the past two world wars so we hand-gathered casualty data from online databases and put that information in as well. 
                                        The casualties in the simulation occurred at the same time as in the past world wars for instance, if the first battle occurred on July 14, that would be Day 1 in the model counter and then the next battle on July 25, would be displayed as Day 11. 
                                        Along with the casualty data, we multiplied it by the weapon efficiency in order to simulate new casualty rates.
                                        </p>
                                        <p>Although we were not able to answer our initial question with this model, I think it would be useful for history classes to visualize international warfare and its impact on world population.
                                        </p>
                                    </v-card-text>
                                </v-row>
                                <v-row>
                                    <v-col 
                                        @click="showImg(7)"
                                        cols="12"
                                    >
                                        <v-img
                                            class="img"
                                            src="https://julielinzhou.files.wordpress.com/2019/01/10ww2change-1.png"
                                            contain
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-card-subtitle class="font-weight-bold subtitle-1">Key Features</v-card-subtitle>
                                    <v-card-text>
                                        <ul>    
                                            <li>World Map with countries in different shades of color depending on the size of their population today</li>
                                            <li>User-adjustable inputs on the left side</li>
                                            <li>Adjustable inputs include: weapon efficiency, which country’s population to monitor, which dataset to use (World War I or World War II), and number of soldiers</li>
                                        </ul>
                                    </v-card-text>
                                </v-row>
                                <v-row>
                                   <v-col
                                    @click="showImg(8)" 
                                    cols="12"
                                   >
                                        <v-img
                                            class="img"
                                            src="https://julielinzhou.files.wordpress.com/2019/01/iitsec_flowchart.png"
                                            contain
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <v-card-subtitle class="font-weight-bold subtitle-1">Other Places Featured</v-card-subtitle>
                                        <v-card-text class="pb-0">
                                            <v-col 
                                                @click="showImg(9)"
                                                cols="12"
                                            >
                                                <v-img
                                                    class="img"
                                                    src="https://julielinzhou.files.wordpress.com/2020/01/screenshot-38.png"
                                                    contain
                                                />
                                            </v-col>
                                            <p><a href="https://www.iitsec.org/-/media/sites/iitsec/link-attachments/showdaily_day-3_web.ashx?la=en">I/ITSEC ShowDaily 2016 on page 14</a></p>
                                            <p>In addition to I/ITSEC, we also presented our research and findings at MODSIM World in Virginia Beach, Virginia and Old Dominion University’s MSV Student Capstone Conference in Suffolk, Virginia.</p>
                                            <p><a href="https://www.modsimworld.org/papers/2017/A_Simulation_on_the_Effect_of_a_Major_World_War_on_the_Population_of_the_World.pdf">MODSIM World Published Paper</a></p>
                                        </v-card-text>
                                    </v-col>
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
</template>
<script>
export default {
    name: 'Code', 
    data: () => ({
        code: ["https://julielinzhou.files.wordpress.com/2020/01/scannable-document-on-jan-2-2020-at-7-29-00-pm-2.jpg", 
            "https://julielinzhou.files.wordpress.com/2020/01/scannable-document-3-on-jan-2-2020-at-7-29-00-pm-2.jpg", 
            "https://julielinzhou.files.wordpress.com/2020/01/scannable-document-2-on-jan-2-2020-at-7-29-00-pm.png", 
            "https://julielinzhou.files.wordpress.com/2019/07/screen-shot-2019-07-16-at-2.55.19-pm-1.png", 
            "https://julielinzhou.files.wordpress.com/2019/07/screen-shot-2019-07-16-at-2.56.51-pm.png", 
            "https://julielinzhou.files.wordpress.com/2019/01/mentorshipsteps.png", 
            "https://julielinzhou.files.wordpress.com/2019/01/projected-cassini-1.png", 
            "https://julielinzhou.files.wordpress.com/2019/01/10ww2change-1.png",
            "https://julielinzhou.files.wordpress.com/2019/01/iitsec_flowchart.png",
            "https://julielinzhou.files.wordpress.com/2020/01/screenshot-38.png"
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
a {
    text-decoration: none;
}
</style>