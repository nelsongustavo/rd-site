import axios from 'axios';

export default function tracker() {
  if (localStorage.user) {
    updateUserTracks();
  } else {
    addUserToStorage();
  }
}

function addUserToStorage() {
  const user = { "id": "", "name": "", "email": "", "tracks_attributes": [{"url": window.location.pathname, "date": new Date().getTime()}]};
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

function updateUserTracks() {
  let user = JSON.parse(localStorage.user);
  user.tracks_attributes.push({"url": window.location.pathname, "date": new Date().getTime()});
  localStorage.user = JSON.stringify(user);
}

function sendData(email) {
  let user = JSON.parse(localStorage.user);
  user.email = email;
  axios.post('http://localhost:3000/api/v1/users', user)
  .then((response) => {
    user.id = response.data.id;
    localStorage.user = JSON.stringify(user);
  })
}

export { sendData }
