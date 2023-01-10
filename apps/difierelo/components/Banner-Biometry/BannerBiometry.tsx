import React from 'react';
import { NextiBiometrics } from '../../../../libs/ui/generic/src/lib/nexti-biometrics/nexti-biometrics';

export const BannerBiometry = () => {
  return (
    <>
      <div>
        <NextiBiometrics
          authenticateResult={() => console.log('llega')}
          user={undefined}
          userExist={false}
        />
      </div>
    </>
  );
};
export default BannerBiometry;
