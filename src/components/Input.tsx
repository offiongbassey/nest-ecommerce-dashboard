interface InputProps {
    name: string;
    type: string;
    placeholder: string;
    variant: 'primary-input';
}

const Input = ({ name, type, placeholder, variant }: InputProps) => {
  return (
      <input name={name} type={type} placeholder={placeholder} className={`${variant} w-full`} />
  )
}

export default Input
