import React, { createContext, useContext, useState } from 'react';


const colorThemes = {
  default: {
    primary: '#3B82F6',
    secondary: '#60A5FA',
    accent: '#93C5FD',
    background: '#EFF6FF',
    text: '#1E3A8A'
  },
  dark: {
    primary: '#1F2937',
    secondary: '#374151',
    accent: '#4B5563',
    background: '#111827',
    text: '#F9FAFB'
  },
  nature: {
    primary: '#059669',
    secondary: '#10B981',
    accent: '#34D399',
    background: '#ECFDF5',
    text: '#064E3B'
  }
};

const ColorThemeContext = createContext<{
  theme: keyof typeof colorThemes;
  colors: typeof colorThemes[keyof typeof colorThemes];
  setTheme: (theme: keyof typeof colorThemes) => void;
}>({
  theme: 'default',
  colors: colorThemes.default,
  setTheme: () => {}
});

export const ColorThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<keyof typeof colorThemes>('default');

  return (
    <ColorThemeContext.Provider value={{
      theme,
      colors: colorThemes[theme],
      setTheme
    }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export const useColorTheme = () => useContext(ColorThemeContext);
