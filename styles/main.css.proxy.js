// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 18px;\n}\n\nbody {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  height: 100vh;\n  padding: 0 250px;\n  width: 100vw;\n}\n\n.links {\n  display: flex;\n  list-style: none;\n  padding: 1rem 0;\n}\n.links__link {\n  padding: 1.5rem;\n}\n\n.link {\n  color: #333;\n  cursor: pointer;\n  text-decoration: none;\n  position: relative;\n}\n.link svg {\n  position: absolute;\n  fill: none;\n  stroke: dodgerblue;\n  stroke-width: 2px;\n}\n.link svg.arc {\n  top: 100%;\n  left: -20%;\n}\n.link svg.scribble {\n  top: 100%;\n  left: 0%;\n}\n.link svg path {\n  stroke-dasharray: 1;\n  stroke-dashoffset: 1;\n  transition: stroke-dashoffset 0.3s ease-out;\n}\n.link:hover svg path {\n  stroke-dashoffset: 0;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}