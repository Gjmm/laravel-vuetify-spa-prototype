import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'fa'
    }
}

export default new Vuetify({
    icons: {
      iconfont: 'fa',
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.purple.lighten4,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
          sideBar: colors.indigo.lighten3
        },
        dark: {
          primary: colors.blue,
          secondary: colors.teal.darken4,
          accent: colors.teal.accent4,

          error: colors.deepOrange.accent2,
          info: colors.grey.darken3,
          success: colors.green.accent3,
          warning: colors.amber.base,
          sideBar: colors.indigo
        },
      },
    },
  })