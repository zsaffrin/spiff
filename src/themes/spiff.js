const renderTheme = (baseFontSize = 16) => {
  const breakpoints = {
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  };

  const colors = {
    black: '#111',
    grays: ['#ebedee', '#dee1e3', '#bec4c8', '#97a1a7', '#5f6e78'],
    white: '#f8f9f9',
    primary: '#00365d',
    secondary: '#610008',
    danger: '#b8000f',
    success: '#00a243',
  };

  const inputs = {
    background: colors.white,
    border: `1px solid ${colors.grays[2]}`,
    borderRadius: '3px',
  };

  const spacing = {
    xs: baseFontSize * 0.125, // 2px
    sm: baseFontSize * 0.25, //  4px
    md: baseFontSize * 0.5, //   8px
    lg: baseFontSize, //         16px
    xl: baseFontSize * 1.5, //   24px
    xxl: baseFontSize * 2, //    32px
  };

  return {
    name: 'spiff',
    bodyFontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    baseFontSize,
    colors,
    containerWidth: breakpoints.md,
    spacing,
    buttons: {
      corners: '3px',
      fontWeight: 'bold',
    },
    inputs,
  };
};

export default renderTheme(16);
