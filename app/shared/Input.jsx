import Mail from "./svg/Mail";

export const EmailInput = ({
  placeholder,
  styles = "w-full sm:w-3/5",
  style,
}) => {
  return (
    <div className={`relative ${styles}`} style={style}>
      <input
        className="subscribe-input-email w-full " // Adjust padding to make room for the icon
        type="email"
        placeholder={placeholder}
      />
      <Mail className="absolute left-[12px] top-1/2 transform -translate-y-1/2  text-gray-400" />
    </div>
  );
};

export const TextInput = ({
  placeholder,
  styles = "w-full sm:w-1/2",
  style,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`subscribe-input-text ${styles}`}
    />
  );
};
