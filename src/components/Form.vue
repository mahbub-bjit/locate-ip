<script setup lang="ts">
import { getHostInfo } from '@/services/getHostInfo';
import { useLocationStore } from '@/stores/location';
import { useIpStore } from '@/stores/ip';
import { toast } from 'vue3-toastify';
import { ref, watch } from 'vue';
import content from '@/content/common.json';
const location = useLocationStore();

const ip = useIpStore();
const isLoadingAPI = ref(false);
const input = ref();
const showError = ref(false);

watch(ip, () => {
    location.resetWithError('');
});

const getLonLatInfo = async () => {
    location.resetWithError('');
    if (!ip.isValid) {
        input.value?.focus();
        showError.value = true;
        location.resetWithError(content.invalid_ip);
    } else {
        isLoadingAPI.value = true;
        try {
            const response = await toast.promise(getHostInfo(ip.address), {
                pending: content.shodan_api_pending,
                success: content.shodan_api_success,
                error: content.shodan_api_error,
            });
            const { latitude, longitude, city, region_code, country_name, country_code } = response;
            location.setLocation({ latitude, longitude, city, region_code, country_name, country_code, error: '' });
            isLoadingAPI.value = false;
        } catch (error) {
            toast.error(String(error));
            location.resetWithError(`${String(error)}, ${content.contact_with_admin}`);
            isLoadingAPI.value = false;
        }
    }
};
</script>

<template>
    <div class="flex flex-col items-center sm:mt-6">
        <label class="mt-4 w-full max-w-sm text-base text-indigo-700" for="ipInput">{{ content.ip_input_label }}</label>
        <input
            ref="input"
            id="ipInput"
            v-model="ip.address"
            :class="`shadow border rounded mt-2 w-full max-w-sm py-2 px-3 outline-none focus:shadow-cyan-600 ${
                showError && !ip.isValid && 'focus:shadow-red-400 border-red-600'
            }`"
            :placeholder="content.ip_input_placeholder"
        />
        <button
            @click="getLonLatInfo"
            class="w-full max-w-sm my-4 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-slate-300 disabled:pointer-events-none"
            type="button"
            :disabled="isLoadingAPI"
            >{{ content.button_label }}</button
        >
        <p class="max-w-sm text-red-500 text-md" v-if="location.error">{{ location.error }}</p>
    </div>
</template>

<style scoped></style>
