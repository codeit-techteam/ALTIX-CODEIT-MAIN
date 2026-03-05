"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ServicesPageTracker() {
  useEffect(() => {
    trackEvent("service_page_visit", {
      event_category: "Funnel",
      event_label: "Service Page",
      page_location: window.location.pathname,
    });
  }, []);

  return null;
}

