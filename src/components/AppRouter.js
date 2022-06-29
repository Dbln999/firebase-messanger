import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import Chat from "./Chat";
import Login from "./Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return user ? (
    <Routes>
      <Route path={CHAT_ROUTE} element={<Chat />} exact></Route>

      <Route
        path="*"
        element={<Navigate replace to={CHAT_ROUTE}></Navigate>}
      ></Route>
    </Routes>
  ) : (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<Login />} exact></Route>

      <Route
        path="*"
        element={<Navigate replace to={LOGIN_ROUTE}></Navigate>}
      ></Route>
    </Routes>
  );
};

export default AppRouter;
