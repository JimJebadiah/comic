<script lang="ts">
    import { useNavigate, useLocation } from "svelte-navigator";
    import type { Guard } from "./guard";
  
    const navigate = useNavigate();
    const location = useLocation();

    export let navigateURL;
    export let guard: Guard;

    $: if (guard.guard()) {
        navigate(navigateURL, {
            state: { from: $location.pathname },
            replace: true,
        });
    }
</script>

{#if !guard.guard()}
    <slot />
{/if}