export const GA_MEASUREMENT_ID = "G-0D9S89LE2B";

export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

