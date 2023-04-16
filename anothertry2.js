if (typeof under !== "undefined" && under !== null) {
  if (typeof cta !== "undefined" && cta !== null) {
    document.addEventListener('click', function(event) {
      var target = event.target;
      while (target) {
        if (target.tagName === 'A' && target.classList.contains(cta)) {
          const linkHref = target.href;
          event.preventDefault();
          setTimeout(function() {
            window.open(linkHref, '_blank', 'noopener,noreferrer');
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
            window.open(linkHref, '_blank', 'noopener,noreferrer');
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
  document.addEventListener('click', function(event) {
    var target = event.target;
    while (target) {
      if (target.tagName === 'A') {
        const linkHref = target.href;
        if (linkHref === back) {
          event.preventDefault();
          if (confirm("Do you want to leave this website?")) {
            setTimeout(function() {
              var win = window.open(back, '_blank', 'noopener,noreferrer');
              win.blur();
              window.focus();
            }, 3000); // Change 3000 to the desired number of milliseconds for the delay
          }
          break;
        }
      }
      target = target.parentNode;
    }
  });
}
