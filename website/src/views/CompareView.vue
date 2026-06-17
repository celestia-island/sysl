<script setup lang="ts">
import compareText from "../../../COMPARISON.md?raw";
import { renderMarkdown } from "@/composables/useMarkdown";

const html = renderMarkdown(compareText);
</script>

<template>
  <div class="page-wrapper prose" role="article" v-html="html"></div>
</template>
