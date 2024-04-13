// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@/styles/variables.scss'
// import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { 
  mdiMagnify, mdiAlarm, mdiStar, mdiPlusThick, 
  mdiHeart, mdiPlusCircleOutline, mdiPotSteamOutline,
  mdiArrowLeft, mdiCameraPlusOutline
} from '@mdi/js'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      magnify: mdiMagnify,
      star: mdiStar,
      clock: mdiAlarm,
      plus: mdiPlusThick,
      plusOutline: mdiPlusCircleOutline,
      heart: mdiHeart,
      pot: mdiPotSteamOutline,
      left: mdiArrowLeft,
      camera: mdiCameraPlusOutline,
    },
    sets: {
      mdi,
    },
  },
})