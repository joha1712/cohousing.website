<style>
  
  button.delete {
    background-color:rgba(10,10,10,.5) !important;
  }
  button.delete:hover {
    background-color:rgba(10,10,10,.6) !important;
  }
  
  .modal .modal-card header.is-danger {
    background:#f14668;color:#fff;
  }

</style>

<template>
  <div id="alertBox" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head is-danger">
        <p class="modal-card-title has-text-centered">{{ header }}</p>
        <button class="delete" aria-label="close" @click="close()"></button>
      </header>
      <section class="modal-card-body">
        {{ message }}
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
    props: {
      message: {
        type: String
      },
      header: {
        type: String,
        default: "Error"
      }
    },
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