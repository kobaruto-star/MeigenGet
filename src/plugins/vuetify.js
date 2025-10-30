import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          text: '#333333', // --color-text を上書き
          border: '#cccccc', // --color-border を上書き
          primary: '#1976D2',
          secondary: '#424242',
        },
      },
    },
  },
})

export default vuetify
