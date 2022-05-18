<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Blog from "./Blog.svelte";
  import BackButton from "./BackButton.svelte";
  import ForwardButton from "./ForwardButton.svelte";
import Routes from "./router/Routes.svelte";
</script>

<main>
  <div id="app">
    <Router>
      <Routes />
    </Router>
  </div>
</main>