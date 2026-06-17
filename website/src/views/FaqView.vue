<script setup lang="ts">
import faqText from "../../../FAQ.md?raw";
import { renderMarkdown } from "@/composables/useMarkdown";

const html = renderMarkdown(faqText);
</script>

<template>
  <div class="page-wrapper prose" role="article" v-html="html"></div>
</template>
