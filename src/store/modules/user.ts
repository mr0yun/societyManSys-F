import { Module, ActionContext } from "vuex";
import { RootState } from "../root-types";
interface UserState {
  isLogin: boolean;
  userInfo: any;
}
export const user: Module<UserState, RootState> = {
  namespaced: true, //namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
  state: (): UserState => ({
    isLogin: false,
    userInfo: {},
  }),
  mutations: {
    setIsLogin(state: UserState, data: boolean): void {
      // 这里的 `state` 对象是模块的局部状态
      state.isLogin = data;
    },
    setUserInfo(state: UserState, data: any): void {
      state.userInfo = data;
    },
  },
  getters: {
    getIsLogin(state: UserState){
      return state.isLogin;
    }
  },
  actions: {
    setUser(context: ActionContext<UserState, RootState>) {
      context.commit("setUserInfo");
    },
  },
};
