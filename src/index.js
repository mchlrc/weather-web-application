import "./styles.css";
import { SecretKeeper } from "./secret-keeper.js";

document.title = "Weather Web Application";
const secretKeeper = new SecretKeeper("weather-web-application");
const apiKey = secretKeeper.getItem("visual-crossing-api");

const body = document.querySelector("body");

const main = document.createElement("div");
main.classList.add("main");
main.textContent = "visual-crossing-api = " + apiKey;
body.appendChild(main);
