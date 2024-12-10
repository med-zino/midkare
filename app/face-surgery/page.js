'use client';
import React from 'react';
import withTreatmentPage from '../components/withTreatmentPage';
import TreatmentPage from '../components/treatmentPage';
import { menuItems, languages } from '../data/navbar';

const FacePlasticSurgeryPage = withTreatmentPage("Face Plastic Surgery")(TreatmentPage);

export default function Page() {
  return <FacePlasticSurgeryPage menuItems={menuItems} languages={languages} />;
}
