const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID as string

export const trackPageView = (url: string, title?: string): void => {
  if (!window.gtag || !GA_MEASUREMENT_ID) return

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title,
  })
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
): void => {
  if (!window.gtag) return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
  })
}
