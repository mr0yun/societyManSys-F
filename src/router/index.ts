import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const files = require.context("../pages/", true, /.vue$/);

const routes: Array<RouteRecordRaw> = [];

files.keys().forEach((i) => {
  const componentName = i.replace(".", "").replace(".vue", "");

  if(componentName.includes("manage/index")){
    routes.push({
      path: componentName,
      name: componentName,
      components: {
        index: files("./manage/index.vue").default,
      },
      children: [{
        path: componentName,
        components: {
          manage: files("./manage/society.vue").default,
        }
      }]
    });
  }
  else if (componentName.includes("manage")){
    componentName.replace("/manage", "");
    routes.push({
      path: componentName,
      name: componentName,
      components: {
        index: files("./manage/index.vue").default,
      },
      children: [{
        path: componentName,
        components: {
          manage: files(i).default,
        }
      }]
    });
  }
  else if (componentName.includes("system/index")){
    routes.push({
      path: componentName,
      name: componentName,
      components: {
        index: files("./system/index.vue").default,
      },
      children: [{
        path: componentName,
        components: {
          system: files("./system/apply.vue").default,
        }
      }]
    });
  }
  else if (componentName.includes("system")){
    componentName.replace("/system", "");
    routes.push({
      path: componentName,
      name: componentName,
      components: {
        index: files("./system/index.vue").default,
      },
      children: [{
        path: componentName,
        components: {
          system: files(i).default,
        }
      }]
    });
  }
  else {
    routes.push({
      path: componentName,
      name: componentName,
      components: {
        index: files(i).default,
      }
    });
  }
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/activity/index",
    },
    ...routes,
  ],
});

export default router;
