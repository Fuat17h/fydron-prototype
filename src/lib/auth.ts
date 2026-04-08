export const isLoggedIn = () => {
  if (typeof window === "undefined") return false;
  const localAuth = localStorage.getItem("auth") === "true";
  const cookieAuth = document.cookie
    .split(";")
    .some((cookie) => cookie.trim() === "auth=true");

  return localAuth || cookieAuth;
};

export const login = () => {
  localStorage.setItem("auth", "true");
  document.cookie = "auth=true; Path=/; Max-Age=2592000; SameSite=Lax";
};

export const logout = () => {
  localStorage.removeItem("auth");
  document.cookie = "auth=; Path=/; Max-Age=0; SameSite=Lax";
};