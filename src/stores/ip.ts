import type { ipInterface } from '@/interface/common';
import { isIpValid } from '@/utils/helper';
import { defineStore } from 'pinia';

export const useIpStore = defineStore('ip', {
    state: () =>
        ({
            address: '',
        } as ipInterface),
    actions: {
        setIp(value: string) {
            this.address = value;
        },
    },
    getters: {
        isValid: state => {
            return isIpValid(state.address);
        },
    },
});
