import { getEdu, getUser } from "./getData";

const renderUser = async (id) => {
  const user = await getUser(id);
  $("img").attr("src", user.avatar);
  $(".intro").html(
    `MY NAME IS ${user.name} ${user.age}YO AND THIS IS MY RESUME/CV`
  );
  $(".about-detail").html(user.description);
};

const createBlock = (year, title, description) => 
  `<li class="edu-expierence">
    <span class="year">${year}</span>
    <article class="edu-content">
      <p>
        <strong>${title}</strong>
      </p>
      <p>${description}</p>
    </article>
  </li>`;

const addBlock = (year, title, description) => {
  return $("ul").append(createBlock(year, title, description));
};

const renderEdu = async (id) => {
  const edu = await getEdu(id);
  edu.sort((a, b) => a.year - b.year);
  edu.forEach((element) => {
    addBlock(element.year, element.title, element.description);
  });
};

export { renderUser, renderEdu };
