import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";

// 引入element-ui-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App)
  .use(store, key)
  .use(router)
  .use(ElementPlus, { size: "small", zIndex: 3000 })
  .mount("#app");
