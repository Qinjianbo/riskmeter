(function injectAnalytics(){
  var head = document.getElementsByTagName('head')[0] || document.documentElement;

  // Google Analytics (gtag.js)
  if (!document.getElementById('rm-gtag')) {
    var ga = document.createElement('script');
    ga.async = true;
    ga.id = 'rm-gtag';
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZG0DPL1BKQ';
    head.insertBefore(ga, head.firstChild || null);
  }
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-ZG0DPL1BKQ');

  // Baidu Analytics
  if (!document.getElementById('rm-baidu-hm')) {
    var hm = document.createElement('script');
    hm.id = 'rm-baidu-hm';
    hm.src = 'https://hm.baidu.com/hm.js?ec6da01d3c47a539b88ef3d8677fe91a';
    var firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(hm, firstScript);
    } else {
      head.appendChild(hm);
    }
  }
})();
