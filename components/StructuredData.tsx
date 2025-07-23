export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Crater Orbs",
    "description": "革新的なアイデアとテクノロジーで、あなたのビジネスを加速します。",
    "url": "https://crater-orbs.com",
    "logo": "https://crater-orbs.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Japanese"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "東京",
      "addressCountry": "JP"
    },
    "sameAs": [
      "https://twitter.com/crater_orbs",
      "https://linkedin.com/company/crater-orbs"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Crater Orbs",
    "url": "https://crater-orbs.com",
    "description": "未来を切り拓く、プロダクト開発カンパニー",
    "publisher": {
      "@type": "Organization",
      "name": "Crater Orbs"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://crater-orbs.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "プロダクト開発サービス",
    "description": "AI・Web技術を活用したプロダクト開発、UI/UXデザイン、技術コンサルティング",
    "provider": {
      "@type": "Organization",
      "name": "Crater Orbs"
    },
    "serviceType": "プロダクト開発",
    "areaServed": "JP",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "開発サービス",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Webアプリケーション開発"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI・機械学習ソリューション"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UXデザイン"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "技術コンサルティング"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData),
        }}
      />
    </>
  );
}

