export default function tracker() {
  if (localStorage.user) {
    updateUserTracks();
  } else {
    addUserToStorage();
  }
}

function addUserToStorage() {
  const user = { "id": "", "name": "", "email": "", "tracks": [{"url": window.location.pathname, "date": new Date().getTime()}]};
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
  user.tracks.push({"url": window.location.pathname, "date": new Date().getTime()});
  localStorage.user = JSON.stringify(user);
}
