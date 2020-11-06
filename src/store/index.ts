import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { global } from "./global";
import { settings } from "./settings";
import { routes } from "./routes";
import { user } from "./user";
import { acl } from "./acl";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0", // a simple property
  },
  modules: {
    global,
    settings,
    routes,
    user,
    acl,
  },
};
export default new Vuex.Store<RootState>(store);
