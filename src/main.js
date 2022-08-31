import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faSun, faMoon, faGear, faPencil, faPlus
 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(
    faSun, faMoon, faGear, faPencil, faPlus
)
const app = createApp(App);
app
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app")
