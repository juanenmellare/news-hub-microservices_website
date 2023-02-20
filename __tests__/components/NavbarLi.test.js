import '@testing-library/jest-dom'
import {render} from "@testing-library/react";

import NavbarLi from "../../src/components/NavbarLi";


jest.mock('next/router', () => ({
    useRouter: () => ({
        pathname: '',
    }),
}));

describe('NavbarLi', () => {
    it('render', () => {
        const href = 'foo';
        const label = 'Foo';
        const { container } = render(<NavbarLi href={href} label={label} onClick={() => {}}/>);
        const wrapper = container.querySelector('li');
        const childOne = wrapper.children[0];

        expect(wrapper.tagName).toBe('LI');
        expect(wrapper.children.length).toBe(1);
        expect(childOne.tagName).toBe('A');
        expect(childOne.textContent).toBe(label);
        expect(childOne.getAttribute('href')).toBe('/'.concat(href));
    });
});
