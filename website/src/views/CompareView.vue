<script setup lang="ts">
import compareText from "../../../COMPARISON.md?raw";
import { renderMarkdown } from "@/composables/useMarkdown";

const html = renderMarkdown(compareText);
</script>

<template>
  <div class="page-wrapper" style="padding-top: var(--sp-16); padding-bottom: var(--sp-16)">
    <div class="prose" v-html="html"></div>
  </div>
</template>
