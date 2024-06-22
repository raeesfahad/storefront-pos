// @ts-nocheck

import wrap from "svelte-spa-router/wrap";
import Home from "./index.svelte";
import Login from "./login.svelte";
import Notfound from "./notfound.svelte";
import { isAuthenticated } from "../lib/functions/Authentication";

const routes = {
  "/": Home,
  "/dashboard": wrap({
    asyncComponent: () => import("./dashboard.svelte"),
    conditions: [
      async (detail) => {
        const authencticated = await isAuthenticated();

        if (authencticated) {
          return true;
        } else {
          return false;
        }
      },
    ],
  }),
  "/inventory": wrap({
    asyncComponent: async() => await import("./Inventory-page.svelte"),
    conditions: [
      async (detail) => {
        const authencticated = await isAuthenticated();

        if (authencticated) {
          return true;
        } else {
          return false;
        }
      },
    ],
  }),
  "/login": Login,
  "/users": wrap({
    asyncComponent: () => import("./users-page.svelte"),
    conditions: [
      async (detail) => {
        const authencticated = await isAuthenticated();

        if (authencticated) {
          return true;
        } else {
          return false;
        }
      },
    ],
  }),

  "*": Notfound,
};

export default routes;
