<template>
     <v-container> 
         <v-row justify="center">
             <v-col cols="6">
                <v-img
                    src="https://i.ibb.co/RQSTdwn/illustration-cursive.png"
                    contain
                    max-width="700"
                />
             </v-col>
          </v-row>
          <v-row>
              <v-list style="background-color:#d8ecf3;">
                  <v-list-item>
                    <v-list-item-title class="title font-weight-thin">TRADITIONAL ART</v-list-item-title>
                  </v-list-item>
            </v-list>
          </v-row>
          <v-row>
            <v-col
                @click="showImg(0)"
                cols="12"
                md="4"
                class="d-flex"
              >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/01/momandme-3.png"
               />
            </v-col>
            <v-col
                @click="showImg(1)"
                cols="12"
                md="4"
                class="d-flex"
              >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/01/1546626626099.jpg"
               />
            </v-col>
            <v-col
                @click="showImg(2)"
                cols="12"
                md="4"
                class="d-flex"
              >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/01/1546626468354.jpg"
               />
            </v-col>
          </v-row>
           <v-row>
              <v-list style="background-color:#d8ecf3;">
                  <v-list-item>
                    <v-list-item-title class="title font-weight-thin">MIXED MEDIA</v-list-item-title>
                  </v-list-item>
            </v-list>
           </v-row>
           <v-row>
             <v-col
                @click="showImg(3)"
                cols="12"
                md="5"
                class="d-flex"
              >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2020/01/img-0701.jpg"
               />
            </v-col>
              <v-col
                @click="showImg(4)"
                cols="12"
                md="3"
                class="d-flex"
              >
               <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2020/01/img-0702.jpg"
               />
            </v-col>
            <v-col
              @click="showImg(5)"
              cols="12"
              md="4"
              class="d-flex"
            >
              <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/01/1546626181795.jpg"
              />
            </v-col>
           </v-row>
           <v-row>
            <v-col
              @click="showImg(6)"
              cols="4"
              class="d-flex"
            >
              <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2020/01/img-0777.jpg"
              />
            </v-col>
            <v-col
              @click="showImg(7)"
              cols="4"
              class="d-flex"
            >
              <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2020/01/img-0781.jpg"
              />
            </v-col>
            <v-col
              @click="showImg(8)"
              cols="4"
              class="d-flex"
            >
              <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2020/01/img-0779.jpg"
              />
            </v-col>
           </v-row>
          <v-row>
            <v-list style="background-color:#d8ecf3;">
                <v-list-item>
                  <v-list-item-title class="title font-weight-thin">DIGITAL ART</v-list-item-title>
                </v-list-item>
            </v-list>
          </v-row>
          <v-row>
            <v-col
              @click="showImg(9)"
              cols="6"
              md="3"
              class="d-flex"
            >
              <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2020/01/me_icon_char_vertical.png"
              />
            </v-col>
            <v-col
              @click="showImg(10)"
              cols="6"
              md="3"
              class="d-flex"
            >
              <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/01/potatome-2.png"
              />
            </v-col>
            <v-col
              @click="showImg(11)"
              cols="6"
              md="3"
              class="d-flex"
            >
              <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2020/01/depression_withsig.png"
              />
            </v-col>
             <v-col
              @click="showImg(12)"
              cols="6"
              md="3"
              class="d-flex"
            >
              <v-img
                class="img"
                src="https://julielinzhou.files.wordpress.com/2019/01/blasiancharacterdesign-3.png"
              />
            </v-col>
          </v-row>
           <vue-easy-lightbox
            :visible="visible"
            :index="index"
            :imgs="art"
            @hide="handleHide"
        ></vue-easy-lightbox>
    </v-container>
</template>
<script>
export default {
    name: 'Illustration',
     data: () => ({
        art: ["https://julielinzhou.files.wordpress.com/2019/01/momandme-3.png", 
          "https://julielinzhou.files.wordpress.com/2019/01/1546626626099.jpg", 
          "https://julielinzhou.files.wordpress.com/2019/01/1546626468354.jpg", 
          "https://julielinzhou.files.wordpress.com/2020/01/img-0701.jpg", 
          "https://julielinzhou.files.wordpress.com/2020/01/img-0702.jpg", 
          "https://julielinzhou.files.wordpress.com/2019/01/1546626181795.jpg", 
          "https://julielinzhou.files.wordpress.com/2020/01/img-0777.jpg", 
          "https://julielinzhou.files.wordpress.com/2020/01/img-0781.jpg", 
          "https://julielinzhou.files.wordpress.com/2020/01/img-0779.jpg",
          "https://julielinzhou.files.wordpress.com/2020/01/me_icon_char_vertical.png", 
          "https://julielinzhou.files.wordpress.com/2019/01/potatome-2.png", 
          "https://julielinzhou.files.wordpress.com/2020/01/depression_withsig.png", 
          "https://julielinzhou.files.wordpress.com/2019/01/blasiancharacterdesign-3.png"],
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