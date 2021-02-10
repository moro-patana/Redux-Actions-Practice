// function that returns an action type and a text value
export function increaseCounter(amount){
  return {
    type: "INCREASE",
    value: amount
  }
}
export function decreaseCounter(amount){
  return {
    type: "DECREASE",
    value: amount
  }
}
export function setSpecialText(e){
  return {
    type: "SET_SPECIALTEXT",
    payload: e
  }
}
export function searchTextByName(firstName){
  console.log("search");
  return {
    type: "SEARCH_NAME",
    payload: firstName
  }
}
export function setCurrentCity(e){
  return {
    type: "SET_CITY",
    payload: e
  }
}
export function setCurrentTemperature(e){
  return {
    type: "SET_CURRENT_TEMPERATURE",
    payload: e
  }
}

export function setImageUrl(e){
  return {
    type: "SET_IMAGE_URL",
    payload: e
  }
}
export function openModal(modal){
  return {
    type: "OPEN_MODAL",
    payload: modal
  }
}

export function closeModal(modal){
  return {
    type: "CLOSE_MODAL",
    payload: modal
  }
}


export function setUser(user){
  return {
    type: "SET_USER",
    payload: user
  }
}
export function removeUser(user){
  return {
    type: "REMOVE_USER",
    payload: user
  }
}
export function sortUsers(user) {
  return {
    type: "SORT_USERS",
    payload: user
  }
}
export function ImgScale(state) {
  return {
    type: "SCALE_IMAGE",
    payload: state
  }
}
export function toggleModal() {
  return {
    type: "TOGGLE_MODAL"
  }
}
export function getUsersList() {
  return async (dispatch) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await res.json();
    dispatch({
      type: "GET_USERS",
      value: users
    })
  }
}


