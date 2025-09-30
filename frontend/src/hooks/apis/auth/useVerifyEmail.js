import { useMutation } from "@tanstack/react-query";
import { verifyEmailRequest } from "@/apis/auth";
import toast from "react-hot-toast";


export const useVerifyEmail = ()=>{
    const {isPending, isSuccess, mutateAsync:verifyEmailMutution, error} = useMutation({
        mutationFn: verifyEmailRequest,

        onSuccess:(data)=>{
            //console.log("Email Verify successfully", data);
            toast.success("Email Verify successfully");
        },
        onError:(err)=>{
            //console.log("Error in verifying Email", err);
            toast.error(err || "Something went wrong");
        }
    });

    return{
        isPending,
        isSuccess,
        error,
        verifyEmail: verifyEmailMutution
    }
}