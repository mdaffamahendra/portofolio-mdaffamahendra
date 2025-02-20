const Button = ({onClick = () => {}, className= "", type= "submit", children}) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};
export default Button;
