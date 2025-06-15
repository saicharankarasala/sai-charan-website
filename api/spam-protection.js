// List of known spam domains and patterns
const SPAM_DOMAINS = [
  'semalt.com',
  'buttons-for-website.com',
  'ilovevitaly.com',
  'priceg.com',
  'floating-share-buttons.com',
  'event-tracking.com',
  'social-buttons.com',
  'sitevaluation.org',
  'trafficmonetize.org',
  'traffic2money.com',
  'trafficmonetizer.org',
  'best-seo-solution.com',
  'best-seo-offer.com',
  'best-seo-software.com',
  'best-seo-service.com',
  'best-seo-company.com',
  'best-seo-consultant.com',
  'best-seo-expert.com',
  'best-seo-agency.com',
  'best-seo-firm.com'
];

// List of suspicious patterns in referrers
const SPAM_PATTERNS = [
  /^https?:\/\/[^/]+\/wp-content/,
  /^https?:\/\/[^/]+\/wp-admin/,
  /^https?:\/\/[^/]+\/wp-includes/,
  /^https?:\/\/[^/]+\/wp-login/,
  /^https?:\/\/[^/]+\/wp-json/,
  /^https?:\/\/[^/]+\/wp-cron/,
  /^https?:\/\/[^/]+\/wp-trackback/,
  /^https?:\/\/[^/]+\/wp-comments/,
  /^https?:\/\/[^/]+\/wp-feed/,
  /^https?:\/\/[^/]+\/wp-rss/,
  /^https?:\/\/[^/]+\/wp-.*/,  // Catch all other wp- patterns
  /^https?:\/\/[^/]+\/admin/,
  /^https?:\/\/[^/]+\/login/,
  /^https?:\/\/[^/]+\/cron/,
  /^https?:\/\/[^/]+\/trackback/
];

// Function to check if a hostname is suspicious
const isSuspiciousHostname = (hostname) => {
  // Check for IP addresses
  if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname)) {
    return true;
  }

  // Check for too many subdomains
  if (hostname.split('.').length > 3) {
    return true;
  }

  // Check for common spam TLDs
  const spamTLDs = ['.xyz', '.top', '.work', '.site', '.online', '.click'];
  if (spamTLDs.some(tld => hostname.endsWith(tld))) {
    return true;
  }

  return false;
};

export default function handler(request) {
  const referer = request.headers.get('referer');
  
  // If no referer, allow the request
  if (!referer) {
    return new Response(null, { status: 200 });
  }

  try {
    const refererUrl = new URL(referer);
    const refererHost = refererUrl.hostname;

    // Check against known spam domains
    if (SPAM_DOMAINS.some(domain => refererHost.includes(domain))) {
      return new Response(null, { status: 403 });
    }

    // Check for suspicious hostname patterns
    if (isSuspiciousHostname(refererHost)) {
      return new Response(null, { status: 403 });
    }

    // Check against spam patterns
    if (SPAM_PATTERNS.some(pattern => pattern.test(referer))) {
      return new Response(null, { status: 403 });
    }

    // Add custom header to mark legitimate referrers
    return new Response(null, {
      status: 200,
      headers: {
        'X-Referrer-Status': 'verified'
      }
    });

  } catch (error) {
    // If URL parsing fails, allow the request but mark it as suspicious
    return new Response(null, {
      status: 200,
      headers: {
        'X-Referrer-Status': 'suspicious'
      }
    });
  }
} 