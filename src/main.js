import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseHeader from "./components/UI/BaseHeader.vue";

library.add(fas);

import App from "./App.vue";

const app = createApp(App);
app.component("fa", FontAwesomeIcon);
app.component("base-header", BaseHeader);

app.mount("#app");
