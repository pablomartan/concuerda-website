import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const CustomLink: FC<
  PropsWithChildren<{
    url: string;
    className?: string;
  }>
> = ({ url, className, children }) => {
  const isLinkInternal = !url.includes(".");

  if (isLinkInternal) {
    return (
      <Link to={url} replace className={className ?? ""}>
        {children}
      </Link>
    );
  } else {
    return (
      <a href={url} target="_blank" className={className ?? ""}>
        {children}
      </a>
    );
  }
};

export default CustomLink;
