import { useMutation } from "@tanstack/react-query";

import { signInRequest} from "@/apis/auth";

export const useSignIn = () =>{
    const {isPending, isSuccess, error, mutateAsync:signInMutution} = useMutation({
        // from the UI we call this mutate function, this will trigger the signInRequest function
        mutationFn: signInRequest,
        onSuccess: (data)=>{
            console.log("Success sign in", data);
        },
        onError: (error) =>{
            console.log("Error sign in", error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signIn: signInMutution
    }
};