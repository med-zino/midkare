'use client';
import React from 'react';
import withTreatmentPage from '../components/withTreatmentPage';
import TreatmentPage from '../components/treatmentPage';
import { menuItems, languages } from '../data/navbar';

const PlasticSurgeryPage = withTreatmentPage("Plastic Surgery")(TreatmentPage);

export default function Page() {
  return <PlasticSurgeryPage menuItems={menuItems} languages={languages} />;
}
