import { render } from '@testing-library/react';

import Biometry from './biometry';

describe('Biometry', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Biometry />);
    expect(baseElement).toBeTruthy();
  });
});
