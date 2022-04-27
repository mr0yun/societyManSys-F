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
    userComplete: false,
    activityInfo: {},
    societyInfo: {},
    newsInfo: {},
    recruitmentInfo: {},
  },
  mutations: {
    setUserInfo(state, data: any) {
      state.userInfo = data;
      if (data.major && data.grade && data.class && data.email && data.phone) {
        state.userComplete = true as any;
      } else{
        state.userComplete = false;
      }
    },
    setUserLogin(state, isLogin: any) {
      state.userLogin = isLogin;
    },
    setUserComplete(state, isComplete: any) {
      state.userComplete = isComplete;
    },
    setActivityInfo(state, data: any) {
      state.activityInfo = data;
    },
    setSocietyInfo(state, data: any) {
      state.societyInfo = data;
    },
    setNewsInfo(state, data: any) {
      state.newsInfo = data;
    },
    setRecruitmentInfo(state, data: any) {
      state.recruitmentInfo = data;
    },
  },
  modules: {
    user,
  },
});
