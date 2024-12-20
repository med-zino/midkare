import React from 'react';
import Navbar from './Navbar';
import findMenuItemByName from '../utils';
import { menuItems } from '../data/navbar';
import { frMenuItems } from '../data/frNavbar';
import { arMenuItems } from '../data/arNavbar';
import { ruMenuItems } from '../data/ruNavbar';
import { useTranslation } from 'react-i18next';

/**
 * Higher-Order Component for treatment pages.
 * @param {string} treatmentName - The name of the treatment to fetch.
 * @returns {React.Component} - Wrapped component with treatment logic.
 */

const withTreatmentPage = (treatmentName) => (WrappedComponent) => {

  console.log(treatmentName)
const { i18n } = useTranslation(); 

  const currentLanguage = i18n.language || 'en';  

  const currentMenuItems = currentLanguage === 'fr' ? frMenuItems : 
      (currentLanguage === 'ar' ? arMenuItems : 
      (currentLanguage === 'ru' ? ruMenuItems : menuItems));

  return (props) => {

    const treatmentDetails = findMenuItemByName(
       props.menuItems ,
      treatmentName
    )?.subItems || [];
    
    if (!treatmentDetails.length) {
      return <h1>404: Treatment Not Found</h1>;
    }

    return (
      <div>
        <Navbar menuItems={currentMenuItems} languages={props.languages} />
        <WrappedComponent {...props} treatmentDetails={treatmentDetails} treatmentName={treatmentName}  />
      </div>
    );
  };
};

export default  withTreatmentPage;
