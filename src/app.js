import "./style/index.scss";
import { renderUser, renderEdu } from "./javaScript/renderData";

const pathname = window.location.pathname;
const id = pathname.split("/")[2];

renderUser(id);
renderEdu(id);
