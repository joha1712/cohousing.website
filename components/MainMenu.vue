<template>
  <div id="menu" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title has-text-centered">Navigation</p>
        <button class="delete" aria-label="close" @click="close()"></button>
      </header>
      <section class="modal-card-body">
        <div class="buttons">
          <button class="button is-medium is-fullwidth" @click="navigateTo('index.html')">
            <span>Gå til madplan</span>
            <span class="icon">
              <i class="fas fa-utensils"></i>
            </span>
          </button>
        </div>
        <div class="buttons">
          <button class="button is-medium is-fullwidth" @click="navigateTo('overview.html')">
            <span>Gå til opgørelse</span>
            <span class="icon">
              <i class="fas fa-coins"></i>
            </span>
          </button>
        </div>
        <div class="buttons">
          <button class="button is-medium is-fullwidth" @click="navigateTo('index.html')">
            <span>Gå til brugervejledning</span>
            <span class="icon">
              <i class="fas fa-book"></i>
            </span>
          </button>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="close()">Luk</button>
      </footer>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { dom } from '@fortawesome/fontawesome-svg-core'
  import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
  import { faCoins } from "@fortawesome/free-solid-svg-icons/faCoins";
  import { faUtensils } from "@fortawesome/free-solid-svg-icons/faUtensils";  

  // add font awesome icons
  library.add(faBook, faCoins, faUtensils);
  dom.watch();

  export default {
    methods: {
      navigateTo(url) {
        window.location.href = url;
      }, 
      close() {        
        this.$emit("close");
      }
    }    
  }
</script>