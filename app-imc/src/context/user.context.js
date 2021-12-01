import createGlobalState from "react-create-global-state";

const USER = "user";

const stringFyUser = localStorage.getItem(USER);
const user = stringFyUser ? JSON.parse([stringFyUser]) : [];

const [_useGlobalUser, UserProvider] = createGlobalState(user);

const useGlobalUser = () => {
  const [globalUser, _setGlobalUser] = _useGlobalUser();

  const setGlobalUser = (newGlobalUser) => {
    _setGlobalUser(newGlobalUser);
    localStorage.setItem(USER, JSON.stringify(newGlobalUser));
  };
  return [globalUser, setGlobalUser];
};

export { useGlobalUser, UserProvider };
