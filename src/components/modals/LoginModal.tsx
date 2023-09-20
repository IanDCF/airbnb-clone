"use client";
import { useCallback, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { onOpenReg } from "../../Redux/slices/register-modal-slice";
import { onCloseLogin } from "../../Redux/slices/login-modal-slice";
import Heading from "../commons/Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../commons/Button";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const loginOpenState = useSelector(
    (state: any) => state.loginModal.loginModalOpen
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged In");
        router.refresh();
        dispatch(onCloseLogin());
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const toggleModal = useCallback(() => {
    dispatch(onCloseLogin());
    dispatch(onOpenReg());
  }, []);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Log in to your account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="email"
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="password"
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {
          signIn("google");
        }}
      />
      <Button
        outline
        label="Continue with GitHub"
        icon={AiFillGithub}
        onClick={() => {
          signIn("github");
        }}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>First time using Airbnb?</div>
          <div
            onClick={toggleModal}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginOpenState}
      title="Log in"
      actionLabel="Continue"
      onClose={() => dispatch(onCloseLogin())}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
