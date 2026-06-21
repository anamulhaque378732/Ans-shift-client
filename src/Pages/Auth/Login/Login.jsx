import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../Hooks/UseAuth";
import GoogleLogin from "../SocialLogin/GoogleLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signinUser } = useAuth();

  const handleLogin = (data) => {
    const { email, password } = data;
    signinUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl mx-auto font-medium py-2 my-2">
        Welcome Back
      </h1>
      <p className="text-center">Please login</p>

      <form onSubmit={handleSubmit(handleLogin)} action="">
        <fieldset className="fieldset">
          {/* Email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input text-xl w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          {/* password field */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input text-xl w-full"
            placeholder="Password"
          />

          {errors.password?.type === "required" && (
            <p className="text-red-500">
              Password must be 6 characters or longer
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary text-black text-xl mt-4">
            Login
          </button>
        </fieldset>
      </form>
      <p>
        New to Ans.Shift
        <Link to="/register" className="btn my-1 text-red-600 ">
          Register
        </Link>
      </p>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Login;
