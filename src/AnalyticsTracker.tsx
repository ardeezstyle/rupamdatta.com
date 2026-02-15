import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from './analytics'

const AnalyticsTracker = () => {
  const location = useLocation()
  const pageTitle = document.title

  useEffect(() => {
    trackPageView(location.pathname, pageTitle)
  }, [location, pageTitle])

  return null
}

export default AnalyticsTracker
