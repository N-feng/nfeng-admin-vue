import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { global } from "./global";
import { settings } from "./settings";
import { routes } from "./routes";
import { user } from "./user";
import { acl } from "./acl";
import { tagsBar } from "./tagsBar"

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
    tagsBar,
  },
};
export default new Vuex.Store<RootState>(store);
