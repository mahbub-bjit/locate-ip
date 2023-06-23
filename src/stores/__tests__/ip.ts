// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia';
import { useIpStore } from '../ip';
import { beforeEach, describe, expect, it } from 'vitest';
describe('IP Store', () => {
    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia());
    });

    it('set ip', () => {
        const ip = useIpStore();
        expect(ip.address).toBe('');
        ip.setIp('8.8.8.8');
        expect(ip.address).toBe('8.8.8.8');
    });

    it('ip is valid', () => {
        const ip = useIpStore();
        ip.setIp('8.8.8.8');
        expect(ip.isValid).toBe(true);
    });

    it('ip is invalid', () => {
        const ip = useIpStore();
        ip.setIp('8.8');
        expect(ip.isValid).toBe(false);
    });
});
