const Button = ({ onClick, children }) => (
    <button  onClick={onClick} type="button">
      {children}
      Load more
    </button>
  );
  
  export default Button;