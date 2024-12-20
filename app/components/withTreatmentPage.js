import React from 'react';
import Navbar from './Navbar';
import findMenuItemByName from '../utils';
import { menuItems } from '../data/navbar';

/**
 * Higher-Order Component for treatment pages.
 * @param {string} treatmentName - The name of the treatment to fetch.
 * @returns {React.Component} - Wrapped component with treatment logic.
 */

const withTreatmentPage = (treatmentName) => (WrappedComponent) => {

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
        <Navbar menuItems={menuItems} languages={props.languages} />
        <WrappedComponent {...props} treatmentDetails={treatmentDetails} treatmentName={treatmentName}  />
      </div>
    );
  };
};

export default  withTreatmentPage;
