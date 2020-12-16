import { Link } from "react-router-dom";


export const LoginPage = () => {
    return(
    <>
      <p>Страница логина</p>

      <Link to="/registration">Зарегистрироваться</Link>
    </>
  );
};
