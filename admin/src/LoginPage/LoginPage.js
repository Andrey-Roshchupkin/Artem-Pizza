import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../AuthContext";
import { serverLogin } from "../api";

const schema = yup.object().shape({
  email: yup.string().email().required("Логин не может быть пустым!"),
  password: yup.string().required("Пароль не может быть пустым!"),
});

export const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const { login } = useAuth();

  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const token = await serverLogin(data);
      login(token);
      history.push("/");
    } catch (error) {
      console.log(error);
      alert("Ошибка авторизации. Попробуйте снова");
    }
  };

  return (
    <>
      <p>Страница авторизации</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Введите логин</p>
        <input type="email" name="email" ref={register} />
        <p>{errors.login?.message}</p>

        <p>Введите пароль</p>
        <input type="password" name="password" ref={register} />
        <p>{errors.password?.message}</p>

        <button>Войти</button>
      </form>
    </>
  );
};
