import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export const Navbar = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const isLoggedIn = await isAuthenticated();

  return (
    <nav className="bg-dark p-3 rounded-2">
      <ul>
        {isLoggedIn ? (
          <>
            <li className="text-warning">
              <LogoutLink>Logout</LogoutLink>
            </li>
            <li>{user.username}</li>
          </>
        ) : (
          <>
            <li>
              <LoginLink>Login</LoginLink>
            </li>
            <li>
              <RegisterLink>Create Account</RegisterLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
