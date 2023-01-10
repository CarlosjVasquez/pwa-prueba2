import { render } from '@testing-library/react';

import NextOcr from './next-ocr';

describe('NextOcr', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextOcr />);
    expect(baseElement).toBeTruthy();
  });
});
