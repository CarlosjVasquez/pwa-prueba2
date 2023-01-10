import { render } from '@testing-library/react';

import NextiOcrModalConfirm from './nexti-ocr-modal-confirm';

describe('NextiBenefits', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NextiOcrModalConfirm
        continueButton=""
        open={true}
        onContinue={() => console.log('continue')}
        textOne=""
        title=""
        img=""
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
