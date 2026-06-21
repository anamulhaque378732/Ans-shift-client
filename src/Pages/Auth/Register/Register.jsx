import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/UseAuth";
import { Link } from "react-router";
import GoogleLogin from "../SocialLogin/GoogleLogin";

const Register = () => {
  // password =A123@mul
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    const { email, password } = data;

    registerUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="md:mt-20   mt-:4 mx-auto">
      <h1 className="text-center text-3xl mx-auto font-medium py-2 my-2">
        Welcome to Ans.shift
      </h1>
      <p className="text-center"> Create an account</p>
      <form
        className="mx-auto"
        onSubmit={handleSubmit(handleRegistration)}
        action=""
      >
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>

          <input
            type="email"
            {...register("email", { required: true })}
            className="input text-xl w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500"> Email is required</p>
          )}
          {/* password */}
          <label className="label">Password</label>

          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-_=+|\\:;"'<>,./~`]).{8,}$/,
            })}
            className="input text-xl w-full "
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-xl"> Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">
              Password must be 6 character or Longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must have at least one uppercase, at least one lowercase
              , at least one number , at least one spacial characters like as
              "Ac@4mk45"
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn   mt-4 btn-primary text-black text-xl ">
            Register
          </button>
        </fieldset>
      </form>
      <p>
        Already have an account ? please login
        <Link to="/login" className="btn my-1 text-green-600 ">
          Login
        </Link>
      </p>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Register;
