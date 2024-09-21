import FeedbackComponent from "../_components/ticket";
import FeedbackComponentCSS from "../_components/course/ticket-course";

const PopoverDemo = () => {
  return (
    <div className="flex flex-col gap-4">
      <FeedbackComponentCSS />
      <FeedbackComponent />
    </div>
  );
};

export default PopoverDemo;
