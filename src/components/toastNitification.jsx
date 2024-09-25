// ToastNotification component
const ToastNotification = ({ show, message }) => {
  return (
    <div
      className={`${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } fixed bottom-4 right-4 bg-orange text-white p-4 rounded-xl shadow-lg transition-opacity duration-300 ease-in-out`}
    >
      {message}
    </div>
  );
};

export default ToastNotification;
