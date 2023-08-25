"use client";
import { useDispatch } from "react-redux";
import Container from "../commons/Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { clearUser, setUser } from "@/Redux/auth/auth-slice";
import { useEffect } from "react";
import { User } from "@prisma/client";

type Props = {
  currentUser?: User | null;
};

const Navbar: React.FC<Props> = ({ currentUser }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser) {
      dispatch(clearUser());
    } else {
      console.log(currentUser);
      const data = {
        id: currentUser?.id,
        name: currentUser?.name || "",
        email: currentUser?.email || "",
        emailVerified: currentUser?.emailVerified,
        image: currentUser?.image,
      };
      dispatch(setUser({ ...data }));
    }
  }, [currentUser]);

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
