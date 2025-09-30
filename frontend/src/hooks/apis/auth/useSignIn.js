import { useMutation } from "@tanstack/react-query";

import { signInRequest} from "@/apis/auth";
import toast from "react-hot-toast";

export const useSignIn = () =>{
    const {isPending, isSuccess, error, mutateAsync:signInMutution} = useMutation({
        // from the UI we call this mutate function, this will trigger the signInRequest function
        mutationFn: signInRequest,
        onSuccess: (data)=>{
            console.log("Success sign in", data);
            toast.success("Signed in successfully");
        },
        onError: (error) =>{
            console.log("Error sign in", error);
            toast.error(error || "Something went wrong");
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signIn: signInMutution
    }
};