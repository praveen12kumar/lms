import { useMutation } from "@tanstack/react-query";
import { forgotPasswordRequest} from "@/apis/auth";
import toast from "react-hot-toast";


export const useForgotPassword = () =>{
    const {isPending, isSuccess, error, mutateAsync: forgotPasswordMutution} = useMutation({
        mutationFn: forgotPasswordRequest,

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
        forgotPassword: forgotPasswordMutution
    }
}