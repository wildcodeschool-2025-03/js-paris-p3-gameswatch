import { Navigate } from "react-router";
import { useUser } from "../contexts/user.context";

type Props = {
  children: React.ReactElement;
};

function RedirectRoot({ children }: Props) {
  const { user } = useUser();
  console.log(user);

  return user ? <>{children}</> : <Navigate to="/Login" />;
}

export default RedirectRoot;
