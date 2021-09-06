<script lang="ts">
  import CommonHero from "@/components/sections/common-hero.svelte";
  import BlogPostPreview from "@/components/blog/preview.svelte";
  import { posts } from "./posts";
</script>

<CommonHero>
  <h1 slot="title">Blog</h1>
</CommonHero>

{#each posts as post}
  <BlogPostPreview post="{post}" />
{/each}
