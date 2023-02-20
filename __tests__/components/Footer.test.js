import '@testing-library/jest-dom'
import {render} from "@testing-library/react";

import Footer from "../../src/components/Footer";


describe('Footer', () => {
    it('render', () => {
        const { container } = render(<Footer />);
        const wrapper = container.querySelector('footer');
        const childOne = wrapper.children[0];

        expect(container.children.length).toBe(1);
        expect(wrapper.tagName).toBe('FOOTER');
        expect(wrapper.children.length).toBe(1);
        expect(childOne.tagName).toBe('SPAN');
        expect(childOne.textContent).toBe('News Hub | Microservices');
        expect(childOne.children.length).toBe(0);
    });
});
