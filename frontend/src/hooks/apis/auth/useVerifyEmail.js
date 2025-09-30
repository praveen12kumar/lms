import { useMutation } from "@tanstack/react-query";
import { verifyEmailRequest } from "@/apis/auth";


export const useVerifyEmail = ()=>{
    const {isPending, isSuccess, mutateAsync:verifyEmailMutution, error} = useMutation({
        mutationFn: verifyEmailRequest,

        onSuccess:(data)=>{
            console.log("Email Verify successfully", data);
        },
        onError:(err)=>{
            console.log("Error in verifying Email", err);
        }
    });

    return{
        isPending,
        isSuccess,
        error,
        verifyEmail: verifyEmailMutution
    }
}