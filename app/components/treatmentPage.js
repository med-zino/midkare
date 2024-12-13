import React from "react";
import styles from "../styles/TreatPage.module.css";
import ContactForm from "./ContactForm";
import Image from 'next/image';


const makePath = (name) => {
  return  '/tre/' + name
  }


const SubItem = ({ item }) => {

 
  return (
    <div id={item.name} className={styles.subItem}>
      <div className={styles.subItemImageContainer}>
         <img
          src={makePath(item.img)}
          alt={item.name}
          className={styles.treatmentImage}
          />
        {/* Reserve Now Button */}
        <div className={styles.reserveButtonContainer}>
          <a href="#contact" className={styles.reserveButton}>
            Reserve Now
          </a>
        </div>
      </div>
      <div className={styles.subItemContent}>
        <h4 className={styles.subItemName}>{item.name}</h4>
        <p className={styles.subItemDescription}>
          {item.description || "No description available."}
        </p>

        {item.benefits && (
          <div className={styles.subItemSection}>
            <h5>Benefits</h5>
            <ul>
              {item.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        {item.suitableFor && (
          <div className={styles.subItemSection}>
            <h5>Suitable For</h5>
            <p>{item.suitableFor}</p>
          </div>
        )}

        {item.preparationAndAftercare && (
          <div className={styles.subItemSection}>
            <h5>Preparation and Aftercare</h5>
           
              <p>Preparation:</p>{" "}
              {item.preparationAndAftercare.preparation}
           
           
              <p>Aftercare:</p>{" "}
              {item.preparationAndAftercare.aftercare}
          
          </div>
        )}

        {item.expectedResults && (
          <div className={styles.subItemSection}>
            <h5>Expected Results</h5>
              <p>Timeline:</p> {item.expectedResults.timeline}
              <p>Duration:</p> {item.expectedResults.duration}
          </div>
        )}

        {item.cost && (
          <div className={styles.subItemSection}>
            <h5>Cost</h5>
            <p>{item.cost}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const TreatmentItem = ({ item }) => {
  return (
    <div id={item.name} className={styles.treatmentItem}>
      <div className={styles.treatmentItemContent}>
        <img
          src={makePath(item.img)}
          alt={item.name}
          className={styles.treatmentImage}
          />
        <div className={styles.textContent}>
          <h2 className={styles.treatmentItemName}>{item.name}</h2>
          <p className={styles.treatmentItemDescription}>
            {item.description || "No description available."}
          </p>
        </div>
      </div>

      {item.subItems && (
        <div className={styles.subItemsContainer}>
          {item.subItems.map((subItem) => (
            <SubItem key={subItem.name} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreatmentPage = ({ treatmentDetails, treatmentName }) => {
  return (
    <div className={styles.treatmentPage}>
      <div className={styles.pageContent}>
        {/* Sidebar Navigation */}
        <div className={styles.sidebar}>
          <ul className={styles.sidebarList}>
            {treatmentDetails.map((item) => (
              <li key={item.name} className={styles.sidebarItem}>
                <a href={`#${item.name}`} className={styles.sidebarLink}>
                  {item.name}
                </a>
                {item.subItems && (
                  <ul className={styles.subItemList}>
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name} className={styles.subItemLink}>
                        <a href={`#${subItem.name}`}>{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.treatmentPageTitle}>{treatmentName}</h1>
          <p className={styles.treatmentPageDescription}>
            Discover a wide range of treatments tailored to meet your needs.
            Explore detailed descriptions, images, and subcategories to learn
            more about what we offer.
          </p>

          <div className={styles.treatmentList}>
            {treatmentDetails.map((item) => (
              <TreatmentItem key={item.name} item={item} />
            ))}
            <ContactForm withNoImage={true}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentPage;
