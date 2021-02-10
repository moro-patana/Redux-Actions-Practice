import { combineReducers } from "redux";

// incomplete reducer function that checks an action prop type to detemine a counter number
function currentCount(count=0, action){
  switch(action.type) {
    case "INCREASE":
      return count + 1;
    case "DECREASE":
      return count - 1;
      default:
        return count;
  }
}

// incomplete reducer function that should check an action prop type to return an array of users
function users(users =[], action){
  switch(action.type) {
    case "SET_USER":
      return [...users, action.payload]
    case "REMOVE_USER":
    return users.slice(0, users.length - 1)
    case "GET_USERS":
      return action.value
      default:
        return users
  }
}

function currentCity(state="", action){
  switch(action.type) {
    case "SET_CITY":
      return action.payload
    default:
      return state
    }
}

function currentTemp(state=0, action){
  switch(action.type) {
    case "SET_CURRENT_TEMPERATURE":
      return action.payload
    default:
      return state;
  }
}

function displayModal(state=false, action){
  switch(action.type) {
    case "OPEN_MODAL":
      return !state;
    case "CLOSE_MODAL":
      return state = false;
    default:
      return state;
  }
}

function imageUrl(state="", action){
  switch(action.type) {
    case "SET_IMAGE_URL":
      return action.payload
    default:
      return state
  }
}

function currentUserSort(state="", action){
  switch(action.type) {
    case "SORT_USERS":
      return action.payload
      default:
        return state
  }
}

function imageScale(state=1, action){
  switch(action.type) {
    case "SCALE_IMAGE":
      return action.payload
      default:
        return state
  }
}

function searchText(state="", action){
  switch(action.type) {
    case "SEARCH_NAME": {
      return action.payload
    }
    default:
      return state
  }
}

// complete reducer function that should check action prop type ""SET_SPECIAL_TEXT" to determine state value
function specialText(state="", action) {
  console.log(state);
  switch(action.type) {
    case "SET_SPECIALTEXT":
      return action.payload
      default:
        return state;

  }
}

export default combineReducers({
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  displayModal,
  imageUrl,
  currentUserSort,
  imageScale,
  users
});
