import { getEdu, getUser } from "./getData";

const renderUser = async (id) => {
  const user = await getUser(id);
  // TODO feedback: 不建议通过标签，如果有其他img标签，那所有都会被修改
  $("img").attr("src", user.avatar);
  $(".intro").html(
    `MY NAME IS ${user.name} ${user.age}YO AND THIS IS MY RESUME/CV`
  );
  $(".about-detail").html(user.description);
};

// TODO feedback: createBlock命名不够表意
const createBlock = (year, title, description) =>
  `<li class="edu-expierence">
    <span class="year">${year}</span>
    <article class="edu-content">
<!--    // TODO feedback: h*标签更合适-->
      <p>
        <strong>${title}</strong>
      </p>
      <p>${description}</p>
    </article>
  </li>`;

const addBlock = (year, title, description) => {
  // TODO feedback: 在for循环中，每次都要操作DOM，影响性能，不推荐这样做
  return $("ul").append(createBlock(year, title, description));
};

const renderEdu = async (id) => {
  const edu = await getEdu(id);
  // TODO feedback: 此处有bug，year是string类型
  edu.sort((a, b) => a.year - b.year);
  edu.forEach((element) => {
    addBlock(element.year, element.title, element.description);
  });
};

export { renderUser, renderEdu };
