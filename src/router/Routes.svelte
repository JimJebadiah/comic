<script lang='ts'>
    import { Router, Route, Link } from "svelte-navigator";
    import Notfound from "../pages/Notfound.svelte";
    import PrivateRoute from "./PrivateRoute.svelte";
</script>

<Route>
    <Notfound />
</Route>