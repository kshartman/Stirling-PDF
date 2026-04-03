import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InfoBanner } from '@app/components/shared/InfoBanner';
import { useDefaultApp } from '@app/hooks/useDefaultApp';

const DISMISSED_KEY = 'stirlingpdf_default_app_banner_dismissed';

export const DefaultAppBanner: React.FC = () => {
  const { t } = useTranslation();
  const { isDefault, isLoading, handleSetDefault } = useDefaultApp();
  const [dismissed, setDismissed] = useState(() => localStorage.getItem(DISMISSED_KEY) === 'true');

  const handleDismissPrompt = () => {
    localStorage.setItem(DISMISSED_KEY, 'true');
    setDismissed(true);
  };

  return (
    <InfoBanner
      icon="picture-as-pdf-rounded"
      message={t('defaultApp.prompt.message', 'Make Stirling PDF your default application for opening PDF files.')}
      buttonText={t('defaultApp.setDefault', 'Set Default')}
      buttonIcon="check-circle-rounded"
      onButtonClick={handleSetDefault}
      onDismiss={handleDismissPrompt}
      loading={isLoading}
      show={!dismissed && isDefault === false}
    />
  );
};
