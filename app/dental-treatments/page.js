'use client';
import React from 'react';
import withTreatmentPage from '../components/withTreatmentPage';
import TreatmentPage from '../components/treatmentPage';
import { menuItems, languages } from '../data/navbar';
import { frMenuItems } from '../data/frNavbar';
import { useTranslation } from 'next-i18next';  

export function Page() {
  const { i18n } = useTranslation(); 

  const { t } = useTranslation('common'); 

  const currentLanguage = i18n.language || 'en';  

  const currentMenuItems = currentLanguage === 'fr' ? frMenuItems : menuItems;

  const DentalTreatmentPage = withTreatmentPage(t('DentalTreatmentName'))(TreatmentPage);

  return <DentalTreatmentPage menuItems={currentMenuItems} languages={languages} />;
}

// Export the Page component wrapped with appWithTranslation for language handling
export default Page;
