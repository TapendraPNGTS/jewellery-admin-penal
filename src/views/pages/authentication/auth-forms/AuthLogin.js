import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
// material-ui
import { useTheme } from "@mui/material/styles";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  useMediaQuery,
} from "@mui/material";
// third party
import * as Yup from "yup";
import { Formik } from "formik";
// project imports
import useScriptRef from "hooks/useScriptRef";
import AnimateButton from "ui-component/extended/AnimateButton";
// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// ============================|| FIREBASE - LOGIN ||============================ //

import AuthApi from "../../../../apis/auth/auth.api";
import { useAuthenticated } from "../../../../hooks/useAuthenticated.hook";
import { getUserLocal } from "../../../../utils/localStorage.util";
import { useDispatch } from "react-redux";

import {
  updateUser,
  updateToken,
} from "../../../../redux/redux-slice/user.slice";
import { toast } from "react-hot-toast";

const FirebaseLogin = ({ ...others }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authApi = new AuthApi();
  const isAuth = useAuthenticated();
  const userInfo = getUserLocal();
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const [checked, setChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  } else {
    return (
      <>
        <Formik
          initialValues={{
            email: "",
            password: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().max(255).required("Email is required"),
            password: Yup.string().max(255).required("Password is required"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              console.log('trySubmit');
              // const loginResponse = await authApi.login({
              //   email: values.email,
              //   password: values.password,
              //   type: "Admin",
              // });
              // console.log(loginResponse);


              if (scriptedRef.current) {
                const loginResponse = await authApi.login({
                  email: values.email,
                  password: values.password,
                  type: "Admin",
                });
                console.log(loginResponse);
                if (loginResponse && loginResponse?.data?.code === 200) {
                  dispatch(updateToken(loginResponse.data.data.token));
                  dispatch(updateUser(loginResponse.data.data.user));
                  toast.success(`Login successsfully`);
                  navigate("/dashboard", { replace: true });
                } else {
                  return toast.error(`Something went wrong!`);
                }
                setStatus({ success: true });
                setSubmitting(false);
              }
            } catch (err) {
              console.error(err);
              if (scriptedRef.current) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form noValidate onSubmit={handleSubmit} {...others}>
              <FormControl
                fullWidth
                error={Boolean(touched.email && errors.email)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="outlined-adornment-email-login">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-login"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="User Email"
                  inputProps={{}}
                />
                {touched.email && errors.email && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-email-login"
                  >
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="outlined-adornment-password-login">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-login"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  inputProps={{}}
                />
                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-login"
                  >
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
              </Stack>
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
              <Box sx={{ mt: 2 }}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Sign in
                  </Button>
                </AnimateButton>
              </Box>
            </form>
          )}
        </Formik>
      </>
    );
  }
};

export default FirebaseLogin;
