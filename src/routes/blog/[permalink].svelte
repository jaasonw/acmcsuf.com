<script context="module">
  import { getPost } from "./posts";

  export function preload(page) {
    const post = getPost({ matchesPermalink: page.params.permalink });
    return { post };
  }
</script>

<script lang="ts">
  import CommonHero from "@/components/sections/common-hero.svelte";
  import type { BlogPost } from "./posts";
  import { highlight } from "@/lib/highlight";

  export let post: BlogPost;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<CommonHero>
  <h1 slot="title">{post.title}</h1>
  <h2 slot="headline">{post.summary}</h2>
  <p slot="text">
    Last updated:
    <time datetime="{post.date.toISOString()}">
      {post.date.toDateString()}
    </time>
  </p>
</CommonHero>

<div id="markdown-container">
  <div id="markdown-root" use:highlight>
    {@html post.html}
  </div>
</div>

<style>
  #markdown-container {
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }

  #markdown-root {
    width: min(1000px, calc(70% + 100px));
    margin: 2em;
  }
</style>
