import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.lightBlue, // #E53935
                secondary: colors.teal.lighten3, // #FFCDD2
                accent: colors.red.lighten2, // #3F51B5
            },
        },
    },
});