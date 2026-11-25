import Link from "next/link";
import Icon from "./Icon";
import styles from "./Button.module.css";

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
  onDark: styles.onDark,
  link: styles.link,
};

export default function Button({
  href,
  variant = "primary",
  size,
  icon = "arrow-right",
  showIcon = true,
  full,
  className = "",
  children,
  ...rest
}) {
  const classes = [
    styles.btn,
    variants[variant] || variants.primary,
    size === "sm" ? styles.sm : "",
    full ? styles.full : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {showIcon ? <Icon name={icon} size={16} strokeWidth={2} /> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
