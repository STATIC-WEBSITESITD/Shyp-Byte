import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { Link } from "react-router-dom";

const BASE_CLASS =
  "hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-3 group active--translate-y-2 tw-px-10 tw-py-5 fw-semibold rounded-pill";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.shypbyte.customer";

type PrimaryButtonProps = {
  children?: ReactNode;
  className?: string;
  fullWidth?: boolean;
  to?: string;
  href?: string;
  as?: "a" | "button";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

const PrimaryButton: FC<PrimaryButtonProps> = ({
  children = "Get Started",
  className = "",
  fullWidth = false,
  to,
  href,
  as,
  type = "button",
  disabled,
  onClick,
}) => {
  const classes = `${BASE_CLASS}${fullWidth ? " w-100" : ""} ${className}`.trim();

  const content = (
    <>
      <span className='button__flair' />
      <span className='button__label'>{children}</span>
      <i className='ph ph-arrow-right tw-text-lg' />
    </>
  );

  if (as === "button") {
    return (
      <button
        type={type}
        disabled={disabled}
        className={classes}
        data-block='button'
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} data-block='button'>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href || PLAY_STORE_URL}
      target='_blank'
      rel='noopener noreferrer'
      className={classes}
      data-block='button'
    >
      {content}
    </a>
  );
};

export default PrimaryButton;
