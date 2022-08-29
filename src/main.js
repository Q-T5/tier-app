import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUser)
const app = createApp(App);
app
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app")
