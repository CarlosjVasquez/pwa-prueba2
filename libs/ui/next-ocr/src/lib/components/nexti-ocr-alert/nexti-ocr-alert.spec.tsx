import { render } from '@testing-library/react';

import NextiOcrAlert from './nexti-ocr-alert';

describe('NextiAlert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NextiOcrAlert
        continueButton=""
        open={true}
        onContinue={() => console.log('continue')}
        textOne=""
        title=""
        icon=""
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
