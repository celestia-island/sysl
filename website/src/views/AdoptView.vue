<script setup lang="ts">
import adoptersText from "../../../ADOPTERS.md?raw";
import { renderMarkdown } from "@/composables/useMarkdown";

const html = renderMarkdown(adoptersText);
</script>

<template>
  <div class="page-wrapper prose" role="article" v-html="html"></div>
</template>
