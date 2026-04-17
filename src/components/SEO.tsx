import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
}) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Island Inn Tennis Club`;
    }

    const updateMetaTag = (property: string, content: string, attr: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attr}="${property}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    if (description) updateMetaTag('description', description);
    
    // OG
    if (ogTitle) updateMetaTag('og:title', ogTitle, 'property');
    if (ogDescription) updateMetaTag('og:description', ogDescription, 'property');
    if (ogImage) updateMetaTag('og:image', ogImage, 'property');
    
    // Twitter
    if (twitterTitle) updateMetaTag('twitter:title', twitterTitle, 'property');
    if (twitterDescription) updateMetaTag('twitter:description', twitterDescription, 'property');
    if (twitterImage) updateMetaTag('twitter:image', twitterImage, 'property');

    // Canonical
    if (canonical) {
      let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', canonical);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonical);
        document.head.appendChild(link);
      }
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage]);

  return null;
};

export default SEO;
