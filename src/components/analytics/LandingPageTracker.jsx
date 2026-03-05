"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function LandingPageTracker() {
  useEffect(() => {
    trackEvent("landing_page_visit", {
      event_category: "Funnel",
      event_label: "Homepage",
      page_location: "home",
    });
  }, []);

  return null;
}

