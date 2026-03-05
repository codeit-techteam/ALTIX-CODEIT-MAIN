"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ContactPageTracker() {
  useEffect(() => {
    trackEvent("contact_page_visit", {
      event_category: "Funnel",
      event_label: "Contact Page",
      page_location: "contact",
    });
  }, []);

  return null;
}

