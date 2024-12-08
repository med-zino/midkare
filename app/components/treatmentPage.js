import React from "react";
import styles from "../styles/TreatPage.module.css";

const SubItem = ({ item }) => {
    return (
      <div className={styles.subItem}>
        <div className={styles.subItemImageContainer}>
          <img
            src="/dentimp.webp"
            alt={item.name}
            className={styles.subItemImage}
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
              <p>
                <strong>Preparation:</strong>{" "}
                {item.preparationAndAftercare.preparation}
              </p>
              <p>
                <strong>Aftercare:</strong>{" "}
                {item.preparationAndAftercare.aftercare}
              </p>
            </div>
          )}
  
          {item.expectedResults && (
            <div className={styles.subItemSection}>
              <h5>Expected Results</h5>
              <p>
                <strong>Timeline:</strong> {item.expectedResults.timeline}
              </p>
              <p>
                <strong>Duration:</strong> {item.expectedResults.duration}
              </p>
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
    <div className={styles.treatmentItem}>
      <div className={styles.treatmentItemContent}>
        <img
          src="/dentimp.webp"
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

const TreatmentPage = ({ treatmentDetails }) => {
  return (
    <div className={styles.treatmentPage}>
      <h1 className={styles.treatmentPageTitle}>Treatment</h1>

      <p className={styles.treatmentPageDescription}>
        Discover a wide range of treatments tailored to meet your needs. Explore
        detailed descriptions, images, and subcategories to learn more about
        what we offer.
      </p>

      <div className={styles.treatmentList}>
        {treatmentDetails.map((item) => (
          <TreatmentItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TreatmentPage;
