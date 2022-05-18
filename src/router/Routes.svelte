<script lang='ts'>
    import { Router, Route, Link } from "svelte-navigator";
import Homepage from "../pages/Homepage.svelte";
    import Notfound from "../pages/Notfound.svelte";
    import PrivateRoute from "./PrivateRoute.svelte";
</script>

<Route path="./">
    <Homepage />
</Route>

<Route path="./2">
    <Homepage />
</Route>

<Route>
    <Notfound />
</Route>