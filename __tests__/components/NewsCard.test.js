import '@testing-library/jest-dom'
import {render} from "@testing-library/react";

import NewsCard from "../../src/components/NewsCard";
import moment from "moment";


const buildNewsMock = (overrides = {}) => {
    const title = 'foo';
    const imageUrl = '/image-url';
    const channel = 'foo-channel';
    const publishedAt = new Date();
    const hasBeenRead = false;

    return { title, imageUrl, channel, publishedAt, hasBeenRead, ...overrides };
}


jest.mock('next/router', () => ({
    useRouter: () => ({
        pathname: '/',
    }),
}));

describe('NewsCard', () => {
    it('render, has been read false/null', () => {
        const newsMock = buildNewsMock();

        const { container } = render(<NewsCard news={newsMock}/>);
        const wrapper = container.querySelector('div');
        const childOne = wrapper.children[0];

        expect(wrapper.tagName).toBe('DIV');
        expect(wrapper.children.length).toBe(1);
        expect(childOne.tagName).toBe('DIV');
        expect(childOne.children.length).toBe(1);
        expect(childOne.children[0].tagName).toBe('A');
        expect(childOne.children[0].children.length).toBe(3);
        expect(childOne.children[0].children[0].tagName).toBe('IMG');
        expect(childOne.children[0].children[0].getAttribute('src')).toBe(newsMock.imageUrl);
        expect(childOne.children[0].children[1].tagName).toBe('DIV');
        expect(childOne.children[0].children[1].textContent).toBe(newsMock.title);
        expect(childOne.children[0].children[2].tagName).toBe('DIV');
        expect(childOne.children[0].children[2].children.length).toBe(2);
        expect(childOne.children[0].children[2].children[0].tagName).toBe('IMG');
        expect(childOne.children[0].children[2].children[1].tagName).toBe('P');
        expect(childOne.children[0].children[2].children[1].textContent).toBe(moment(newsMock.publishedAt).format('DD/MM/YYYY HH:mm'));
    });

    it('render, has been read true', () => {
        const hasBeenRead = true;
        const newsMock = buildNewsMock({ hasBeenRead });

        const { container } = render(<NewsCard news={newsMock}/>);
        const wrapper = container.querySelector('div');
        const childOne = wrapper.children[0];

        expect(childOne.children[0].children.length).toBe(4);
        expect(childOne.children[0].children[0].tagName).toBe('I');
        expect(childOne.children[0].children[0].className).toBe('bi bi-eyeglasses cardNewsIconRead');
        expect(childOne.children[0].children[1]).toBeInTheDocument();
        expect(childOne.children[0].children[2]).toBeInTheDocument();
        expect(childOne.children[0].children[3]).toBeInTheDocument();
    });
});
