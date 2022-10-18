<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <div class="inicio">
          <a href="https://ionicframework.com/docs/components">
            <img
              class="Logo"
              alt="Logo"
              src="@/../public/assets/icon/Logo_nuevo_ucen1.png"
            />
          </a>
          <ion-title><h1>Mi Listado</h1></ion-title>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <Menu></Menu>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <img class="une" src="@/../public/assets/icon/VK1.png" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

.inicio {
  background: blue;
  display: block;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.4);
}
.Logo {
  margin: 0.5%;
  border-radius: 100%;
  width: 6%;
}
h1 {
  display: inline-block;
  background: green;
}
</style>
