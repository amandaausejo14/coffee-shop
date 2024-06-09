import { createContext, useState } from "react";
const initialUserData = {
  user_name: "",
  email: "",
};

const UserContext = createContext(initialUserData);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUserData);
  return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
};

export default UserContext;
