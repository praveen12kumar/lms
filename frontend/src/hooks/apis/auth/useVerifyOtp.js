import { useMutation } from "@tanstack/react-query";
import { verifyOtpRequest } from "@/apis/auth";
import toast from "react-hot-toast";


export const useVerifyOtp = () =>{
    const {isPending, isSuccess, error, mutateAsync: verifyOtpMutution} = useMutation({
        mutationFn: verifyOtpRequest,

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
        verifyOtp: verifyOtpMutution
    
        }
}