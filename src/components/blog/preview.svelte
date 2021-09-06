<script lang="ts">
  import type { BlogPost } from "../../routes/blog/posts";

  export let post: BlogPost;
</script>

<article>
  <img
    src="{`/assets/authors/${post.author}.png`}"
    alt="{`Icon of author ${post.author}`}"
  />
  <h2><a href="{`/blog/${post.permalink}`}">{post.title}</a></h2>
  <p>{post.summary}</p>
</article>

<style>
</style>
