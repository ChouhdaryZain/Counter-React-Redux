import { createStore } from 'redux';

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
}

const counterReducer = (store = INITIAL_VALUE, action) => {
  // console.log("Action Received ", action)
  switch (action.type) {
    case ("INCREMENT"):
      return { ...store, counter: store.counter + 1 };
    case ("DECREMENT"):
      return { ...store, counter: store.counter - 1 };
    case ("ADD_NUMBER"):
      return { ...store, counter: store.counter + Number(action.payload.num) };
    case ("SUBTRACT_NUMBER"):
      return { ...store, counter: store.counter - Number(action.payload.num) };
    case ("PRIVACY_TOGGLE"):
      return { ...store, privacy: !store.privacy };
    default:
      return store;
  }
}

const counterStore = createStore(counterReducer);

export default counterStore;