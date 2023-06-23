<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';
import { toast } from 'vue3-toastify';
import { useLocationStore } from '@/stores/location';
import { useIpStore } from '@/stores/ip';
const location = useLocationStore();
const ip = useIpStore();

const mapDiv = ref();
const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
});

const generateMap = async () => {
    const currPos = {
        lat: location.latitude || 0,
        lng: location.longitude || 0,
    };
    const mapOptions = {
        center: currPos,
        zoom: 8,
    };
    const map = new google.maps.Map(mapDiv?.value, mapOptions);
    let marker = new google.maps.Marker({
        position: currPos,
        title: ip.address,
    });
    marker.setMap(map);
};

watch(location, generateMap);

onMounted(async () => {
    try {
        await loader.importLibrary('maps');
        await generateMap();
    } catch (error) {
        toast.error(String(error));
    }
});
</script>
<template>
    <p class="text-cyan-700 text-base">
        <b>Location:</b>{{ ` ${location.city}, ${location.region_code}, ${location.country_name}` }}
    </p>
    <div ref="mapDiv" id="map" class="mt-4 w-full h-[50vh]"></div>
</template>
<style scoped></style>
