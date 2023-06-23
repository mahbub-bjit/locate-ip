import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TitleSubtitle from '../TitleSubtitle.vue';

describe('TitleSubtitle', () => {
    it('renders properly', () => {
        const wrapper = mount(TitleSubtitle, { props: { title: 'Hello Vitest', subtitle: 'Lets test' } });
        expect(wrapper.text()).toContain('Hello Vitest');
        expect(wrapper.text()).toContain('Lets test');
    });
});
