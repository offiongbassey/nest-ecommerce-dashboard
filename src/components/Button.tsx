interface ButtonProps {
    type: "button" | "submit";
    variant: "btn_green";
    children: React.ReactNode;
    short?: boolean;
    size?: "small" | "big";
}

const Button = ({ type, variant, children, short, size }: ButtonProps) => {
  return (
   <button type={type} className={`${variant} ${size && size === "small" ? "px-6 py-2" : "px-8 py-3"} whitespace-nowrap flex gap-4 items-center`}>{children}</button>
  )
}

export default Button
