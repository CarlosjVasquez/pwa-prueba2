import { render } from '@testing-library/react';

import DataAccessUsers from './data-access-users';

describe('DataAccessUsers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessUsers />);
    expect(baseElement).toBeTruthy();
  });
});
