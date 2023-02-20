import '@testing-library/jest-dom'
import {render} from "@testing-library/react";

import PaginationNumber from "../../src/components/PaginationsNumber";


describe('PaginationNumber', () => {
    it('render, is active true', () => {
        const pageNumber = 1;
        const isActive = true;
        const setPage = () => {};

        const { container } = render(<PaginationNumber pageNumber={pageNumber} isActive={isActive} setPage={setPage} />);
        const wrapper = container.querySelector('li');

        expect(wrapper.className).toBe('page-item newsPaginationLi');
        expect(wrapper.tagName).toBe('LI');
        expect(wrapper.children.length).toBe(1);
        expect(wrapper.children[0].tagName).toBe('A');
        expect(wrapper.children[0].className).toBe('page-link newsPaginationLink newsPaginationLinkActive');
        expect(wrapper.children[0].children.length).toBe(0);
    });

    it('render, is active false', () => {
        const pageNumber = 1;
        const isActive = false;
        const setPage = () => {};

        const { container } = render(<PaginationNumber pageNumber={pageNumber} isActive={isActive} setPage={setPage} />);
        const wrapper = container.querySelector('li');

        expect(wrapper.children[0].className).toBe('page-link newsPaginationLink ');
    });
});
