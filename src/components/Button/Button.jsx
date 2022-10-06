import { FaLongArrowAltDown } from "react-icons/fa";

const Button = ({ onClick, children }) => (
    <button  onClick={onClick} type="button">
      {children}
     < FaLongArrowAltDown/>Load more
    </button>
  );
  
  export default Button;


 