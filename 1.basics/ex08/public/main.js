(() => {
  "use strict";
  document.getElementById("root").appendChild(
    (function () {
      const t = document.createElement("h1");
      return (t.textContent = "Hello World"), t;
    })()
  );
})();
