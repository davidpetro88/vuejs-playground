/**
 * Created by david on 18/09/16.
 */
export default {
    template: require('html!../templates/numbers.component.html'),
    data: function () {
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        }
    },
    vuex: {
        actions: {
            addNumber(state, number){
                state.dispatch('ADD_ELEMENT', number);
            }
        }
    }
}
