'use client';
import React from 'react';
import withTreatmentPage from '../components/withTreatmentPage';
import TreatmentPage from '../components/treatmentPage';
import { menuItems, languages } from '../data/navbar';

const HairTransplantPage = withTreatmentPage("Hair Transplant")(TreatmentPage);

export default function Page() {
  return <HairTransplantPage menuItems={menuItems} languages={languages} />;
}
