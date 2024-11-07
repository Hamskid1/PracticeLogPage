import React,{useState} from "react";
import LoginPage from "../Components/LoginPage";
import RegisterForm from "../Components/RegisterForm";
import "../Components/LoginPage.css"

const HomePage = () => {
    // State to control form display
    const [isRegistering, setIsRegistering] = useState(false);
  
    // Toggle form display
    const toggleForm = () => setIsRegistering((prev) => !prev);
  
    return (
      <div className='containers'>
        {isRegistering ? (
          <RegisterForm onToggleForm={toggleForm} />
        ) : (
          <LoginPage onToggleForm={toggleForm} />
        )}
      </div>
    );
};

export default HomePage;
