import React from 'react';

const preferDarkQuery = '(prefers-color-scheme: dark)';
function getWindowsPreferMode() {
  return window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light';
}
export default function useDarkMode() {
  const [mode, setMode] = React.useState(() => {
    window.localStorage.getItem('colorMode') || getWindowsPreferMode();
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => setMode(getWindowsPreferMode());
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeEventListener(handleChange);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('colorMode', mode);
  }, [mode]);

  return [mode, setMode];
}
