import "./style/index.scss";
import { renderUser, renderEdu } from "./javaScript/renderData";

const { pathname } = window.location;
// TODO feedback: 逻辑有漏洞，如果URL是/any/1，也是可以通过的
const id = pathname.split("/")[2];

renderUser(id);
renderEdu(id);
