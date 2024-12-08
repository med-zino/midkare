'use client';
import React from 'react';
import withTreatmentPage from '../components/withTreatmentPage';
import TreatmentPage from '../components/treatmentPage';
import { menuItems, languages } from '../data/navbar';

const DentalTreatmentPage = withTreatmentPage("Dental Treatments")(TreatmentPage);

export default function Page() {
  return <DentalTreatmentPage menuItems={menuItems} languages={languages} />;
}
