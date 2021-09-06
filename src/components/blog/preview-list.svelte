<script lang="ts">
  import type { BlogPost } from "../../routes/blog/posts";
  import BlogPostPreview from "./preview.svelte";

  export let posts: BlogPost[];
</script>

<section>
  {#each posts as post}
    <BlogPostPreview post="{post}" />
  {/each}
</section>

<style>
</style>
