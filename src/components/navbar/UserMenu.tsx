"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../commons/Avatar";
import MenuItem from "./MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { onOpenReg } from "../../Redux/auth/register-modal-slice";
import { onOpenLogin } from "../../Redux/auth/login-modal-slice";
import { onOpenRent } from "../../Redux/auth/rent-modal-slice";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((value: boolean): boolean => !value);
  }, []);

  const userAuthState = useSelector((state: any) => state.auth.isAuth);
  const userImageState = useSelector((state: any) => state.auth.image);

  const onRent = useCallback(() => {
    if (!userAuthState) {
      return dispatch(onOpenLogin());
    }
    return dispatch(onOpenRent());
  }, [userAuthState]);

  return (
    <div className="relative">
      <div className="flex flex-row item-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={userImageState} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {!userAuthState && (
              <>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    dispatch(onOpenReg());
                  }}
                  label="Sign up"
                />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    dispatch(onOpenLogin());
                  }}
                  label="Log in"
                />
              </>
            )}
            {userAuthState && (
              <>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    router.push("/trips");
                  }}
                  label="My trips"
                />
                <MenuItem onClick={() => {}} label="Favourites" />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    router.push("/reservations");
                  }}
                  label="Reservations"
                />
                <MenuItem onClick={() => {}} label="My properties" />
                <MenuItem onClick={onRent} label="Airbnb my home" />
                <hr />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                  label="Log out"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
