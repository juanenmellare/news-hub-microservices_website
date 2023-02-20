import '@testing-library/jest-dom'
import {render} from "@testing-library/react";

import PaginationDots from "../../src/components/PaginationDots";


describe('PaginationDots', () => {
    it('render', () => {
        const { container } = render(<PaginationDots />);
        const wrapper = container.querySelector('li');

        expect(wrapper.className).toBe('page-item');
        expect(wrapper.tagName).toBe('LI');
        expect(wrapper.children.length).toBe(1);
        expect(wrapper.children[0].tagName).toBe('A');
        expect(wrapper.children[0].className).toBe('page-link newsPaginationDots disabled');
        expect(wrapper.children[0].children.length).toBe(0);
    });
});
