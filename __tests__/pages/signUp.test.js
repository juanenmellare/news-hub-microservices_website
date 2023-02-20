import '@testing-library/jest-dom'
import {render} from "@testing-library/react";

import SignUn from "../../pages/signUp";


describe('SignUp', () => {
    it('render', () => {
        const { container } = render(<SignUn />);
        const wrapper = container;

        expect(wrapper.children.length).toBe(1);
        expect(wrapper.children[0].tagName).toBe('FORM');
        expect(wrapper.children[0].className).toBe('card card--border-primary-red card--narrow');
        expect(wrapper.children[0].children.length).toBe(2);
        expect(wrapper.children[0].children[0].className).toBe('card-header');
        expect(wrapper.children[0].children[1].className).toBe('card-body');
        expect(wrapper.children[0].children[1].children.length).toBe(6);
        expect(wrapper.children[0].children[1].children[0].tagName).toBe('DIV');
        expect(wrapper.children[0].children[1].children[0].className).toBe('mb-3');
        expect(wrapper.children[0].children[1].children[1].tagName).toBe('DIV');
        expect(wrapper.children[0].children[1].children[1].className).toBe('mb-3');
        expect(wrapper.children[0].children[1].children[2].tagName).toBe('DIV');
        expect(wrapper.children[0].children[1].children[2].className).toBe('mb-3');
        expect(wrapper.children[0].children[1].children[3].tagName).toBe('DIV');
        expect(wrapper.children[0].children[1].children[3].className).toBe('mb-3');
        expect(wrapper.children[0].children[1].children[4].tagName).toBe('DIV');
        expect(wrapper.children[0].children[1].children[4].className).toBe('mb-3');
        expect(wrapper.children[0].children[1].children[5].tagName).toBe('BUTTON');
        expect(wrapper.children[0].children[1].children[5].className).toBe('btn btn-primary');
    });
});
