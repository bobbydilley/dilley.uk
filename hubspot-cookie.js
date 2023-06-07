// Define the hubspot variable to push to
var _hsp = window._hsp = window._hsp || [];

// Define the gtag function
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }

// Grant Google Tag Manager consent when HubSpot consent hook is fired
_hsp.push(['addPrivacyConsentListener', function (consent) {
    if (consent.allowed) {
        gtag('consent', 'update', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted',
        });
    }
}]);
