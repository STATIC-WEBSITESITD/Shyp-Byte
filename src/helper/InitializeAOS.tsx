import { useEffect, type FC } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const InitializeAOS: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
    AOS.refresh();
  }, [pathname]);

  return null;
};

export default InitializeAOS;
