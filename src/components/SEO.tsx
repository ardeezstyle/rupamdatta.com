import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  fullUrl: string
}

export default function SEO({ title, description, fullUrl }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Rupam Datta | Senior Staff Software Engineer"
      />

      <meta
        property="og:description"
        content="Frontend architecture, scalable UI systems, design systems, and enterprise frontend engineering with React, Angular, and TypeScript."
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://www.rupamdatta.com/" />

      <meta
        property="og:image"
        content="https://www.rupamdatta.com/og-image.jpg"
      />
    </Helmet>
  )
}
