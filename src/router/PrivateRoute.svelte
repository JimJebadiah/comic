<script lang="ts">
    import { Route } from "svelte-navigator";
    import type { Guard } from "./guards/guard";
    import PrivateRouteGuard from "./guards/PrivateRouteGuard.svelte";

    export let path;
    export let navigateURL;
    export let guard: Guard;
</script>
  
<Route {path} let:params let:location let:navigate>
    <PrivateRouteGuard {navigateURL} {guard}>
        <slot {params} {location}/>
    </PrivateRouteGuard>
</Route>