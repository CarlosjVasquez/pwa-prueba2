import { render } from '@testing-library/react';

import NextiOcrModalInfo from './nexti-ocr-modal-info';

describe('NextiBenefits', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NextiOcrModalInfo
        continueButton=""
        open={true}
        onClose={() => console.log('close')}
        onContinue={() => console.log('continue')}
        textOne=""
        title=""
        exitButton="Salir"
        imgBackground=""
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
