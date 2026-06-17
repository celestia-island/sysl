<script setup lang="ts">
import faqText from "../../../FAQ.md?raw";
import { renderMarkdown } from "@/composables/useMarkdown";

const html = renderMarkdown(faqText);
</script>

<template>
  <div class="page-wrapper" style="padding-top: var(--sp-16); padding-bottom: var(--sp-16)">
    <div class="prose" v-html="html"></div>
  </div>
</template>
