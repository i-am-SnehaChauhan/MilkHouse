import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'te', label: 'తెలుగు' },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    setShowDropdown(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', textAlign: 'left' }}>
      {/* Toggle Button */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        style={{
            padding: '10px 20px',
            backgroundColor: 'transparent', // Transparent background
            border: 'transparent', // No border
            color: 'white', // White text
            borderRadius: '5px', // Rounded corners
            cursor: 'pointer', // Pointer cursor
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
          }}
      >
         {languages.find((lang) => lang.code === currentLanguage)?.label || 'Select Language'}
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            left: '0',
            marginTop: '8px',
            width: '150px',
            backgroundColor: 'white',
            border: 'transparent',
            borderRadius: '5px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                style={{
                  width: '100%',
                  padding: '10px',
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                  border: 'transparent',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#f9f9f9')}
                onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
