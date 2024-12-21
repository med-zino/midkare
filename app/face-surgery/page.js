'use client';
import React from 'react';
import withTreatmentPage from '../components/withTreatmentPage';
import TreatmentPage from '../components/treatmentPage';
import { menuItems, languages } from '../data/navbar';
import { frMenuItems } from '../data/frNavbar';
import { ruMenuItems } from '../data/ruNavbar';
import { useTranslation } from 'next-i18next'; 
import { arMenuItems } from '../data/arNavbar';
import { trMenuItems } from '../data/trNavbar';


export default function Page() {

const { i18n } = useTranslation(); 

  const { t } = useTranslation('common'); 

  const currentLanguage = i18n.language || 'en';  

  const currentMenuItems = currentLanguage === 'fr' ? frMenuItems :
    (currentLanguage === 'tr' ? trMenuItems : 
    (currentLanguage === 'ar' ? arMenuItems : 
    (currentLanguage === 'ru' ? ruMenuItems : menuItems)));

  const FacePlasticSurgeryPage = withTreatmentPage(t('FaceSurgeryName'))(TreatmentPage);

  return <FacePlasticSurgeryPage menuItems={currentMenuItems} languages={languages} />;
}
