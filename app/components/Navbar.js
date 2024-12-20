"use client";

import styles from "../styles/Navbar.module.css";
import { useState, useEffect, useRef } from "react";
import i18n from "i18next";

export default function Navbar({ menuItems, languages }) {
  // Initialize with the current i18n language if possible
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const currentLangCode = i18n.language?.toUpperCase() || "EN";
    return (
      languages?.find(lang => lang.code === currentLangCode) ||
      languages?.[0] ||
      { code: "EN", name: "English", flag: "/flags/uk.svg" }
    );
  });
  
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, updateIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      updateIsFixed(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => setIsMobileMenuOpen(false), 0);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLanguageChange = async (lang) => {
    try {
      // First change the i18n language
      await i18n.changeLanguage(lang.code.toLowerCase());
      // Only update the selected language if i18n change was successful
      setSelectedLanguage(lang);
    } catch (err) {
      console.error("Error changing language:", err);
    }
    setIsLanguageDropdownOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isFixed ? styles.fixed : ""}`}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" className={styles.logoImage} />
      </div>
      <button
        className={styles.hamburger}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        &#9776;
      </button>
      <ul
        className={`${styles.navItems} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        {menuItems &&
          menuItems.map((item, index) => (
            <li key={index} className={item.subItems ? styles.dropdown : ""}>
              <a href={item.link || "#"} className={styles.navItem}>
                {item.name}{" "}
                {item.subItems && (
                  <span className={styles.chevron}>&#x25BC;</span>
                )}
              </a>
              {item.subItems && (
                <div className={styles.dropdownContent}>
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className={styles.dropdownItem}>
                      <span>
                        {subItem.name}{" "}
                        {subItem.subItems && (
                          <span className={styles.chevron}>&#x25B6;</span>
                        )}
                      </span>
                      {subItem.subItems && (
                        <div className={styles.subDropdownContent}>
                          {subItem.subItems.map((nestedItem, nestedIndex) => (
                            <a
                              key={nestedIndex}
                              href={nestedItem.link}
                              className={styles.dropdownItem}
                            >
                              {nestedItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        <li className={styles.dropdown}>
          <button
            className={styles.languageButton}
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          >
            <img src={selectedLanguage.flag} className={styles.flagIcon} alt={selectedLanguage.code} />{" "}
            {selectedLanguage.code}{" "}
            <span className={styles.chevron}>&#x25BC;</span>
          </button>
          {isLanguageDropdownOpen && (
            <div className={styles.dropdownContent}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={styles.dropdownItem}
                  onClick={() => handleLanguageChange(lang)}
                >
                  <img src={lang.flag} className={styles.flagIcon} alt={lang.code} />
                  {lang.code} - {lang.name}
                </button>
              ))}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}