import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Joga o scroll para o topo (x:0, y:0)
  }, [pathname]); // Toda vez que o caminho da URL mudar, ele executa

  return null;
};

export default ScrollToTop;