// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia';
import { useLocationStore } from '../../stores/location';
import { beforeEach, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Map from '../Map.vue';

describe('Location Store', () => {
    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia());
    });

    it('test map', () => {
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
        const wrapper = mount(Map);
        expect(wrapper.text()).toContain('Location: LA, CA, USA');
    });
});
