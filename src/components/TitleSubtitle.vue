<script setup lang="ts">
import type { titleSubtitleInterface } from '@/interface/common';

defineProps<titleSubtitleInterface>();
</script>

<template>
    <div class="greetings">
        <h1 class="text-lime-600 font-bold relative text-2xl text-center lg:text-left">{{ title }}</h1>
        <h3 class="text-lime-800 text-center lg:text-left">{{ subtitle }}</h3>
    </div>
</template>

<style scoped></style>
