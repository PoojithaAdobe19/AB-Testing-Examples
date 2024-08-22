// Google Optimize - Sample A/B Test Setup
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('event', 'optimize.callback', {
    callback: function(variant) {
        if (variant === '1') {
            document.getElementById("cta").textContent = "Join our exclusive club!";
        }
    }
});
