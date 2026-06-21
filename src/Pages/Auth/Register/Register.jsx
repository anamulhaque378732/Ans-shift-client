import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleLogin from "../SocialLogin/GoogleLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();

  const location = useLocation();

  const navigate = useNavigate();

  const handleRegistration = (data) => {
    const { email, password, name, photo } = data;

    registerUser(email, password)
      .then((result) => {
        console.log(result.user);

        //1.  store the image in form data and get the photo url
        const profileImage = photo[0];
        const formData = new FormData();

        // 2. send the photo to store and get hte url

        formData.append("image", profileImage);
        const imageApi_Url = `https://api.imgbb.com/1/upload?expiration=600&key= ${import.meta.env.VITE_image_host_key}`;

        axios.post(imageApi_Url, formData).then((res) => {
          console.log("After image upload", res.data.data.url);

          // Update user profile to firebase

          const userProfile = {
            displayName: name,
            photoURL: res.data.data.url,
          };

          updateUserProfile(userProfile)
            .then(() => {
              console.log("User profile updated done");
              navigate(location?.state || "/");
            })
            .catch((error) => {
              console.log(error);
            });
        });
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
          {/* Name field */}
          <label className="label">Name</label>

          <input
            type="text"
            {...register("name", { required: true })}
            className="input text-xl w-full"
            placeholder=" Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500"> Name is required</p>
          )}
          {/* image field */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input text-xl w-full"
            placeholder="your image"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500"> Photo is required</p>
          )}

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
          <button
            state={location.state}
            className="btn 
            mt-4 btn-primary
             text-black text-xl "
          >
            Register
          </button>
        </fieldset>
      </form>
      <p>
        Already have an account ? please login
        <Link
          state={location.state}
          to="/login"
          className="btn my-1 text-green-600 "
        >
          Login
        </Link>
      </p>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Register;
