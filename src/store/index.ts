import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { user } from "./modules/user";
import { RootState } from "./root-types";

/* eslint-disable */
// 定义 injection key
export const key: InjectionKey<Store<RootState>> = Symbol();
// 创建一个新的 store 实例 StoreOptions<RootState>
export const store: Store<RootState> = createStore({
  state: {
    userInfo: {},
    userLogin: false,
  },
  mutations: {
    setUserInfo(state, data: any) {
      state.userInfo = data;
    },
    setUserLogin(state, isLogin: any) {
      state.userLogin = isLogin;
    },
  },
  modules: {
    user,
  },
});
