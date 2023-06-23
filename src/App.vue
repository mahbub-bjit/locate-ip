<script setup lang="ts">
import TitleSubtitle from '@/components/TitleSubtitle.vue';
import Form from '@/components/Form.vue';
import Map from '@/components/Map.vue';
import { useLocationStore } from '@/stores/location';
import content from '@/content/common.json';
const location = useLocationStore();
</script>
<template>
    <header class="lg:flex lg:place-items-center lg:pr-20">
        <img alt="Locate IP" class="block m-auto sm:h-24 sm:w-24" src="./assets/logo.png" width="75" height="75" />

        <div class="wrapper">
            <TitleSubtitle :title="content.app_title" :subtitle="content.app_slogan" />
        </div>
    </header>

    <main>
        <Form />
        <Map v-if="location.isValid" />
    </main>
</template>

<style scoped></style>
