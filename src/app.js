import "./style/index.scss";
import { getUser, getEdu } from "./javaScript/getData";

const pathname = window.location.pathname;
const id = pathname.split("/")[2];

getEdu(id);
getUser(id);
