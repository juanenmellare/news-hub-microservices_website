import '@testing-library/jest-dom'
import {render} from "@testing-library/react";

import Navbar from "../../src/components/Navbar";


jest.mock('next/router', () => ({
    useRouter: () => ({
        pathname: '',
    }),
}));

describe('Navbar', () => {
    it('render', () => {
        const { container } = render(<Navbar/>);
        const wrapper = container.querySelector('nav');
        const childOne = wrapper.children[0];

        expect(wrapper.tagName).toBe('NAV');
        expect(wrapper.children.length).toBe(1);
        expect(childOne.tagName).toBe('DIV');
        expect(childOne.children.length).toBe(3);
    });
});
