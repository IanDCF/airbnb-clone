"use client";
import { useDispatch } from "react-redux";
import Container from "../commons/Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { clearUser, setUser } from "@/Redux/slices/auth-slice";
import { useEffect } from "react";
import { SafeUser } from "@/types/index";
import Categories from "./Categories";

type Props = {
  currentUser?: SafeUser | null;
};

const Navbar: React.FC<Props> = ({ currentUser }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser) {
      dispatch(clearUser());
    } else {
      const data = {
        id: currentUser.id,
        name: currentUser.name || "",
        email: currentUser.email || "",
        image: currentUser.image,
      };
      dispatch(setUser({ ...data }));
    }
  }, [currentUser, dispatch]);

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
      <Categories />
    </div>
  );
};

export default Navbar;
