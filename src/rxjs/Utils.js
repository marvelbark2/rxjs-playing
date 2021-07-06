export const print = (msg) => {
  const app = document.querySelector("#app");
  const el = document.createElement("h1");
  el.innerText = `🔵 ${msg}`;
  app.appendChild(el);
}