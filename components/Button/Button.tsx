import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "yellow";
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
}

const Button = ({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const combinedClassName = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    // Якщо це зовнішнє посилання
    if (href.startsWith("http") || href.endsWith(".pdf")) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }
    // Якщо це внутрішній лінк Next.js
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type || "button"}
      onClick={onClick}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};

export default Button;
