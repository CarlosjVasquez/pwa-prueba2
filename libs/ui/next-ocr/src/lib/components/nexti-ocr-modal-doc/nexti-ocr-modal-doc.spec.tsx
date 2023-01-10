import { render } from '@testing-library/react';

import NextiOcrModalDoc from './nexti-ocr-modal-doc';

describe('NextiBenefits', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NextiOcrModalDoc
        continueButton=""
        open={true}
        onContinue={() => console.log('continue')}
        textOne=""
        title=""
        description=""
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
