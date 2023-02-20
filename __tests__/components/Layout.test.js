import '@testing-library/jest-dom'
import {render} from "@testing-library/react";

import Layout from "../../src/components/Layout";


jest.mock('next/router', () => ({
    useRouter: () => ({
        pathname: '',
    }),
}));

describe('Layout', () => {
    it('render', () => {
        const spanFooText = 'Foo';
        const Child = () => <span>{spanFooText}</span>;
        const { container } = render(<Layout><Child/></Layout>);
        const wrapper = container;
        const childOne = wrapper.children[0];
        const childTwo = wrapper.children[1];
        const childThree = wrapper.children[2];

        expect(wrapper.tagName).toBe('DIV');
        expect(wrapper.children.length).toBe(3);
        expect(childOne.tagName).toBe('NAV');
        expect(childTwo.tagName).toBe('MAIN');
        expect(childTwo.children.length).toBe(1);
        expect(childTwo.children[0].tagName).toBe('SPAN');
        expect(childTwo.children[0].textContent).toBe(spanFooText);
        expect(childThree.tagName).toBe('FOOTER');
    });
});
