import RawButton from "@mui/material/Button";

interface ButtonProps {
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  startIcon?: React.ReactNode;
  href?: string;
  width?: string;
  height?: string;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  disabled = false,
  color = "secondary",
  startIcon,
  href = "",
  width,
  height,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  const sxProperty: object = {
    width: width,
    height: height,
  };
  return (
    <RawButton
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      color={color}
      startIcon={startIcon}
      href={href}
      sx={sxProperty}
    >
      {children}
    </RawButton>
  );
};
