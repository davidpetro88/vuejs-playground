/**
 * Created by david on 18/09/16.
 */
import Vue from 'vue';
import AppComponent from './app.component';
import store from './store';

new Vue({
    el: "#app",
    data: {
        message: 'Hello World!!'
    },
    components: {
        'app-component': AppComponent
    },
    store
});