<template>
  <div class="container">    
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title">
          Skattejagt #1
        </h1>
        <p class="subtitle ">
          Velkommen til Buske skattejagt - en skattejagt for alle
        </p>

        <div class="columns">
          <div class="column is-half is-offset-one-quarter">

            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control has-icons-left">
                    <input class="input is-info" type="text" placeholder="Skriv kodeord" v-model="guess">
                    <span class="icon is-left">
                      <i class="fas fa-gem" aria-hidden="true"></i>
                    </span>
                  </p>
                </div>

                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click="checkPassword">
                      Ok
                    </button>
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal" v-if="this.info != null">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <textarea class="input is-info" type="text" rows="7" value="" disabled v-model="info"
                      style=" min-height: inherit; height: auto;"></textarea>
                  </p>
                </div>

                <div class="field" style="visibility: hidden">
                  <p class="control">
                    <button class="button is-success">
                      Ok
                    </button>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>  
</template>

<script>
  import Vue from "vue";
  
  export default {
    data: function () {                    
      return {
        guess: null,
        info: null,
      };      
    },
    methods: {
      checkPassword() {
        if (this.guess.toLowerCase().replace(" ","").indexOf("andersand") !== -1)
          this.info = "Rigtigt! Skatten er gemt under fliset ved det udgået kastanjetræ i starten af Allén. Husk at gemme skatten igen og ta' kun en ting pr person.";
        else
          this.info = "Desværre er kodeordet forkert - prøv igen";
        } 
      }  
  }
</script>