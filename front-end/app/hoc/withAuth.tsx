import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function withAuth(Component: React.FC) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();
    const isLoggedIn = JSON.parse(
      localStorage.getItem("isLoggedIn") || "false"
    );

    useEffect(() => {
      if (!isLoggedIn) {
        router.push("/");
      }
    }, [isLoggedIn, router]);

    if (!isLoggedIn) {
      return null;
    }

    return <Component {...props} />;
  };
}
