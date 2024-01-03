import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";
export default function Index() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/example')

  }, [])
  return (
    <>

    </>
  );
}
