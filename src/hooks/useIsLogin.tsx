import { useState } from "react";

export function useIsLogin() {
  const [isLogin, setIsLogin] = useState(false);
  return { isLogin, setIsLogin };
}
