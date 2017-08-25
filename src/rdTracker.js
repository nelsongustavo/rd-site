import axios from 'axios';

export default function tracker(page) {

  if (localStorage.user) {
    updateUserTracks(page);
  } else {
    addUserToStorage(page);
  }
}

function addUserToStorage(page) {
  const user = { "id": "", "name": "", "email": "", "tracks_attributes": [{"url": page, "date": new Date().toUTCString()}]};
  localStorage.user = JSON.stringify(user);
}

function updateUserTracks(page) {
  let user = JSON.parse(localStorage.user);
  const track = {"url": page, "date": new Date().toUTCString()};

  user.tracks_attributes.push(track);
  localStorage.user = JSON.stringify(user);

  if (hasEmail()) {
    addTrackData(user.id, track);
  }
}

function hasEmail() {
  const user = JSON.parse(localStorage.user);
  if (user.email !== "undefined") {
    return true
  } else {
    return false;
  }
}

function addTrackData(userId, track) {
  axios.post(`http://localhost:3000/api/v1/users/${userId}/tracks`, track);
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
