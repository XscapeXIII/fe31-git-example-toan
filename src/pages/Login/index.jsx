import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "antd";
import { useNavigate, Navigate } from "react-router-dom";

import { loginAction } from "../../redux/actions";
import { ROUTES } from "../../constants/routes";

import * as S from "./styles";

function LoginPage() {
  const [loginForm] = Form.useForm();

  const { loginData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = useMemo(() => localStorage.getItem("accessToken"), []);

  useEffect(() => {
    if (loginData.error) {
      loginForm.setFields([
        {
          name: "email",
          errors: [" "],
        },
        {
          name: "password",
          errors: [loginData.error],
        },
      ]);
    }
  }, [loginData.error, loginForm]);

  const handleLogin = (values) => {
    dispatch(
      loginAction({
        data: {
          email: values.email,
          password: values.password,
        },
        callback: (role) =>
          navigate(
            role === "admin" ? ROUTES.ADMIN.DASHBOARD : ROUTES.USER.HOME
          ),
      })
    );
  };
  if (accessToken) return <Navigate to={ROUTES.USER.HOME} />;

  return (
    <S.LoginWrapper>
      <S.LoginContainer>
        <h3>Login</h3>
        <Form
          form={loginForm}
          name="loginForm"
          layout="vertical"
          onFinish={(values) => handleLogin(values)}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loginData.load}
          >
            Submit
          </Button>
        </Form>
      </S.LoginContainer>
    </S.LoginWrapper>
  );
}

export default LoginPage;
