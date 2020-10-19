<template>
  <div class="container">
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title is-hidden-mobile-bottommarginfix">
          <a href="javascript:window.location.href=window.location.href">{{ pageTitle }}</a>
          <span class="control is-pulled-right">
            <button class="button is-small" @click="loadNavigationModal()" style="background-color:black;">
              <span class="icon is-small">
                <i class="fas fa-lg fa-bars"></i>
              </span>
            </button>
          </span>
        </h1>
        <p class="subtitle is-hidden-touch">
          <a href="javascript:window.location.href=window.location.href">{{ pageSubtitle }}</a>
        </p>
      </div>
    </section>

    <section class="section" style="padding-top: 0">
      <div class="columns is-centered">
        <div class="column is-three-fifths has-text-centered">

          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field is-narrow">
                <p class="control ">
                  <input id="fromDate" class="input" type="date" v-model.lazy="fromDate" autocomplete="off" placeholder="Fra dato">
                </p>
              </div>
              <div class="field is-narrow">
                <p class="control">
                  <input id="toDate" class="input" type="date" v-model.lazy="toDate" autocomplete="off" placeholder="Til dato">
                </p>
              </div>
              <div class="field is-narrow">
                <p class="control">
                  <button id="update" class="button is-success" @click="loadStatistics(fromDate,toDate)">Opdater</button>
                </p>
              </div>
            </div>
          </div>

          <table class="table is-striped">
            <thead>
              <tr>
                <th>Navn</th>
                <th>Kok</th>
                <th>Deltager</th>
                <th>Gæster (voksne)</th>
                <th>Gæster (børn)</th>
                <th>Beløb for mad</th>
                <th>Udlæg for mad</th>
                <th>Netto</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in this.overview" :key="row.id">
                <td>{{ row.personName }}</td>
                <td>{{ row.chefCount }}</td>
                <td>{{ row.mealCount }}</td>
                <td>{{ row.adultGuests }}</td>
                <td>{{ row.childGuests }}</td>
                <td>{{ row.mealCostSum }}</td>
                <td>{{ row.expensesSum }} </td>
                <td>{{ row.nettoSum }} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <mainmenu id="navigationModal" @close="hideNavigationModal()" :class="{ 'is-active' : navigationModalActive }" v-if="navigationModalActive" />
  </div>
</template>

<script>
  import Vue from "vue";
  import axios from "axios";
  import mainmenu from "../components/MainMenu.vue"  
  import flatpickr from "flatpickr";
  import { danish } from "flatpickr/dist/l10n/da.js";
  import styles from "flatpickr/dist/themes/dark.css";
  import { config } from "../scripts/config.js";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { dom } from '@fortawesome/fontawesome-svg-core'
  import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
    
  // add font awesome icons
  library.add(faBars);
  dom.watch();
  
  export default {
    components: {
      mainmenu      
    },
    data: function () {
      return {
        pageTitle: "Buske bofællesskab",
        pageSubtitle: "Fællesmad oversigt",
        overview: null,
        fromDate: null,
        toDate: null,
        navigationModalActive: false
      };
    },
    methods: {
      loadStatistics(fromDate, toDate) {
        axios
          .get(`${config.baseApiUrl}/commonmeals/statistics/overview`, {
            params: {
              fromDate: fromDate,
              toDate: toDate
            }
          })
          .then(response => {
            let d = response.data;
            this.overview = d.rows;
            this.fromDate = d.fromDate.split("T").shift();
            this.toDate = d.toDate.split("T").shift();
            this.pageTitle = d.title,
              this.pageSubtitle = d.subtitle
          })
          .catch(e => {
            alert(`Error fetching statistics: ${e}`);
            console.log(e);
          });
      },
      loadNavigationModal() {        
        this.navigationModalActive = true;
      },
      hideNavigationModal() {        
        this.navigationModalActive = false;
      },
    },
    created() {
      this.loadStatistics();
    },
    mounted() {
      var vm = this;
      flatpickr.localize(danish);
      flatpickr("#fromDate", {
        weekNumbers: true,
        onChange: function (a, b) {
          vm.$set(vm, "fromDate", b);
        }
      });
      flatpickr("#toDate", {
        weekNumbers: true,
        onChange: function (a, b) {
          vm.$set(vm, "toDate", b);
        }
      });
    }
  }
</script>