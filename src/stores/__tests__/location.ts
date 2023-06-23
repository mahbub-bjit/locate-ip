// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia';
import { useLocationStore } from '../location';
import { beforeEach, describe, expect, it } from 'vitest';
describe('Location Store', () => {
    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia());
    });

    it('set location', () => {
        const location = useLocationStore();
        const data = {
            latitude: 28.3,
            longitude: 71.9,
            city: 'LA',
            region_code: 'CA',
            country_name: 'USA',
            error: '',
        };
        expect(location.latitude).toBe(null);
        location.setLocation(data);
        expect(location.latitude).toBe(28.3);
    });

    it('reset location', () => {
        const location = useLocationStore();
        const data = {
            latitude: 28.3,
            longitude: 71.9,
            city: 'LA',
            region_code: 'CA',
            country_name: 'USA',
            error: '',
        };
        location.setLocation(data);
        expect(location.city).toBe('LA');
        location.resetWithError('');
        expect(location.city).toBe('');
    });

    it('reset with error', () => {
        const location = useLocationStore();
        const data = {
            latitude: 28.3,
            longitude: 71.9,
            city: 'LA',
            region_code: 'CA',
            country_name: 'USA',
            error: '',
        };
        location.setLocation(data);
        expect(location.latitude).toBe(28.3);
        location.resetWithError('There was an error');
        expect(location.error).toBe('There was an error');
    });
});
