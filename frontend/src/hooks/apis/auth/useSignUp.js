import { useMutation } from "@tanstack/react-query";
import { signUpRequest } from "@/apis/auth";
import toast from "react-hot-toast";

export const useSignUp = () => {
  const {
    mutateAsync: signUpMutation,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      //console.log("✅ Sign up success:", data);
      // optional: toast.success("Account created!");
      toast.success("✅ Please verify your email! ");
    },
    onError: (err) => {
      //console.error("❌ Sign up error:", err);
      toast.error("❌"+ err || "Something went wrong! ");
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    mutate,          // fire-and-forget
    signUp: signUpMutation, // promise style
  };
};
