import { useMutation } from "@tanstack/react-query";
import { signUpRequest } from "@/apis/auth";

export const useSignUp = () => {
  const {
    mutate,
    mutateAsync: signUpMutation,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      console.log("✅ Sign up success:", data);
      // optional: toast.success("Account created!");
    },
    onError: (err) => {
      console.error("❌ Sign up error:", err);
      // optional: toast.error(err.message || "Something went wrong");
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
