import { useMutation } from "@tanstack/react-query";

import { signUpRequest, signInRequest} from "@/apis/auth";

export const useSignUp = () =>{
    const {isPending, isSuccess, error, mutateAsync:signUpMutution} = useMutation({
        // from the UI we call this mutate function, this will trigger the signUpRequest function
        mutationFn: signUpRequest,
        onSuccess: (data)=>{
            console.log("Success sign up", data);
        },
        onError: (error) =>{
            console.log("Error sign up", error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signUpMutution
    }
};

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
        signInMutution
    }

};