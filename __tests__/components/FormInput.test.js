import '@testing-library/jest-dom'
import {render} from "@testing-library/react";

import FormInput from "../../src/components/FormInput";


describe('FormInput', () => {
    it('render', () => {
        const label = 'foo-label'
        const { container } = render(<FormInput label={label}/>);
        const wrapper = container.querySelector('div');
        const childOne = wrapper.children[0];
        const childTwo = wrapper.children[1];

        expect(wrapper.tagName).toBe('DIV');
        expect(wrapper.children.length).toBe(2);
        expect(childOne.tagName).toBe('LABEL');
        expect(childOne.textContent).toBe(label);
        expect(childOne.children.length).toBe(0);
        expect(childTwo.tagName).toBe('INPUT');
        expect(childTwo.children.length).toBe(0);
    });
});
