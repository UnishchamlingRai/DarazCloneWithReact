import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logIn as loginApi } from "../../../Services/authAPI";
import { useUser } from "../../../contexts/userContext";


function useLogin() {
    const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {onHandelSetUser}=useUser()
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ username, password }) => loginApi({ username, password }),
    onSuccess: (user) => {
      onHandelSetUser(user)
      navigate("/");
      queryClient.setQueryData(["user", user.user]);
    },
    onError: (err) => {
      
      console.log("ERRRor:", err);
    },
  });

  return { login, isLoading };
}

export default useLogin;