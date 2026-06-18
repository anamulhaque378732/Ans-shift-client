import { FaQuoteLeft } from "react-icons/fa";
const ReviewCard = ({ review }) => {
  const { userName, user_photoURL, review: testimonial } = review;

  return (
    <div className="max-w-sm rounded-3xl bg-gray-100 p-6 shadow-sm">
      <FaQuoteLeft className="mb-5 text-4xl text-teal-200" />

      <p className="text-gray-600 leading-7 text-sm">{testimonial}</p>

      <div className="my-6 border-t border-dashed border-teal-300"></div>

      <div className="flex items-center gap-4">
        <img className="rounded-full w-12" src={user_photoURL} alt="" />

        <div>
          <h4 className="font-bold text-teal-900">{userName}</h4>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
