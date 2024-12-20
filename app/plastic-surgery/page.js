'use client';

import React from 'react';
import withTreatmentPage from '../components/withTreatmentPage';
import TreatmentPage from '../components/treatmentPage';
import { menuItems, languages } from '../data/navbar';
import { frMenuItems } from '../data/frNavbar';
import { arMenuItems } from '../data/arNavbar';
import { ruMenuItems } from '../data/ruNavbar';

import { useTranslation } from 'next-i18next';  


export default function Page() {
const { i18n } = useTranslation(); 

  const { t } = useTranslation('common'); 

  const currentLanguage = i18n.language || 'en';  

const currentMenuItems = currentLanguage === 'fr' ? frMenuItems : 
    (currentLanguage === 'ar' ? arMenuItems : 
    (currentLanguage === 'ru' ? ruMenuItems : menuItems));
  
  const PlasticSurgeryPage = withTreatmentPage(t('PlasticSurgeryName'))(TreatmentPage);

  return <PlasticSurgeryPage menuItems={currentMenuItems} languages={languages} />;
}
