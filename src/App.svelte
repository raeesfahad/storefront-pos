<script>
  // @ts-nocheck
  import Sidebar from "./lib/components/dashboard/sidebar.svelte";
  import Router from "svelte-spa-router";
  import routes from "./pages/router";
  import { location, push } from "svelte-spa-router";

  function pushToLogin(event) {
    push("/login");
  }
</script>

    <main class="flex flex-row">
      {#if $location !== "/login"}
        <Sidebar />
      {/if}
      <Router {routes} on:conditionsFailed={pushToLogin} />
    </main>

