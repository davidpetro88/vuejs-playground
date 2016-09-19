/**
 * Created by david on 18/09/16.
 */
export default {
    props: ['inline'],
    template: require('html!../templates/result.component.html'),
    vuex: {
        getters : {
            inline: function(state){
                return state.inline;
            }
        }
    }
}
