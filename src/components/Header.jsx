import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Limpa o nome do usuário que você salvou no login
    localStorage.removeItem("username"); 
    
    // 2. Redireciona para a tela inicial (Login)
    navigate("/"); 
  };

  return (
    <header className="header">
      <h3>CodeLeap Network</h3>
      <button className="btn-logout" onClick={handleLogout}>
        <span className="logout-text">Logout</span>
        <MdLogout className="logout-icon" />
        
      </button>
    </header>
  );
}

export default Header;