import axios from 'axios';

export default function tracker(page) {
  if (localStorage.user) {
    updateUserTracks(page);
  } else {
    addUserToStorage(page);
  }
}

function addUserToStorage(page) {
  const user = { "id": "", "name": "", "email": "", "tracks_attributes": [{"url": page, "date": new Date().getTime()}]};
  localStorage.user = JSON.stringify(user);
}

function updateUserTracks(page) {
  let user = JSON.parse(localStorage.user);
  user.tracks_attributes.push({"url": page, "date": new Date().getTime()});
  localStorage.user = JSON.stringify(user);
}

function hasEmail() {
  const user = JSON.parse(localStorage.user);
  if (user.email !== "undefined") {
    return true
  } else {
    return false;
  }
}

function sendData(email) {
  let user = JSON.parse(localStorage.user);
  user.email = email;
  axios.post('http://localhost:3000/api/v1/users', user)
  .then((response) => {
    user.id = response.data.id;
    localStorage.user = JSON.stringify(user);
  });
}

export { sendData };
