import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { pageMeta } from "../data/pageMeta";

const defaultMeta = {
  title: "Best International Courier Service in Mumbai | Shyp Byte",
  description:
    "Shyp Byte transforms international courier service with smart technology. We provide seamless worldwide shipping and door to door delivery to 220+ countries.",
  keywords:
    "international courier service, courier service Mumbai, worldwide shipping, Shyp Byte",
  canonical: "https://shypbyte.com/",
};

const PageMeta: React.FC = () => {
  const { pathname } = useLocation();
  const meta = pageMeta[pathname] || defaultMeta;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={meta.canonical} />
    </Helmet>
  );
};

export default PageMeta;
