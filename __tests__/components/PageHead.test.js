import '@testing-library/jest-dom'
import {render} from "@testing-library/react";

import PageHead from "../../src/components/PageHead";


jest.mock('next/head', () => ({
    __esModule: true,
    default: ({children}) => <>{children}</>,
}));

describe('PageHead', () => {
    it('render', () => {
        const title = 'foo';

        const { container } = render(<PageHead title={title} />);
        const titleTag = container.querySelector('title');

        expect(titleTag.textContent).toBe(title);
    });
});
