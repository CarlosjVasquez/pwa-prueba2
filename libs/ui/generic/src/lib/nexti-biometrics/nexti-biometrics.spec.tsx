import { render } from '@testing-library/react';
import NextiBiometrics from './nexti-biometrics';

describe('NextiBiometrics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextiBiometrics />);
    expect(baseElement).toBeTruthy();
  });
});
