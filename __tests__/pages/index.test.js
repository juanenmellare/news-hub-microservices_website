import '@testing-library/jest-dom'
import {render} from "@testing-library/react";

import Home from "../../pages/index";


jest.mock('../../src/lib/news/hooks/useNewsList', () => ({
    useNewsList: () => ({
        isLoading: false,
        newsList: [{
            id: 1, channel: 'TN'
        }],
        fromToPages: [1,2,3]
    }),
}));

describe('Home', () => {
    it('render', () => {
        const { container } = render(<Home />);
        const wrapper = container;

        expect(wrapper.children.length).toBe(2);
        expect(wrapper.children[0].tagName).toBe('DIV');
        expect(wrapper.children[0].children.length).toBe(1);
        expect(wrapper.children[0].children[0].tagName).toBe('DIV');
        expect(wrapper.children[0].children[0].children[0].className).toBe('cardNews');
        expect(wrapper.children[1].tagName).toBe('NAV');
        expect(wrapper.children[1].children.length).toBe(1);
    });
});
