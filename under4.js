if (typeof back !== "undefined" && back !== null) {
  !(function() {
    var t;
    try {
      const URL = window.location.href.split(/[#]/)[0];
      for (t = 0; 10 > t; ++t) history.pushState({}, '', URL + '#');
      onpopstate = function(event) {
        if (event.state) {
          if (confirm("Do you want to open a popunder?")) {
            const popupWindow = window.open(back, '_blank', 'noopener,noreferrer');
            setTimeout(function() {
              popupWindow.blur();
              window.focus();
            }, 6000); // Delayed closing of the popunder window for 6 seconds
          }
          else {
            location.replace(back);
          }
        }
      };
    } catch (o) {
      console.log(o);
    }
  })();
}
