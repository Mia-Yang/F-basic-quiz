const URL = "http://localhost:8080/users";

const getUser = async (id) => {
  return fetch(`${URL}/${id}`, {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  }).then((res) => {
    return res.json();
  });
};

const getEdu = async (id) => {
  return fetch(`${URL}/${id}/educations`, {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  }).then((res) => {
    return res.json();
  });
};

export { getUser, getEdu };
