import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import Link from "next/link";

export const Navbar = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const isLoggedIn = await isAuthenticated();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-mlinda shadow-sm">
      <div className="container-fluid">
        {/* Brand/Logo */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src={user?.picture || "/svg/support.svg"}
            width={40}
            height={40}
            alt="Profile Picture"
            className="rounded-circle me-2"
          />
          <span className="fw-bold">Harp</span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link-mlinda fw-bold nav-link" href="/">
                    Welcome, {user?.given_name || "User"}
                  </Link>
                </li>
                <li className="nav-item">
                  <LogoutLink className="nav-link-mlinda nav-link">
                    Logout
                  </LogoutLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <RegisterLink className="nav-link-mlinda nav-link">
                    Register
                  </RegisterLink>
                </li>
                <li className="nav-item">
                  <LoginLink className="nav-link-mlinda nav-link">
                    Login
                  </LoginLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
