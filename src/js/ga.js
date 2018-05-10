if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?4eb6cac6d602b00b0de3b0dd0a59f0c1";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
}