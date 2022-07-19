import { defineStore } from "pinia";
import axios from "axios";
import cookies from "vue-cookies";
import router from "@/router";

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            clientResponse: undefined,
            
            
        }
    },
    actions :{
    
    }
})