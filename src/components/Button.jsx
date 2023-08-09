const Button = (props) => {
  return (
    <>
      <button
        className="flex border-box border-transparent border-2 justify-center gap-x-4 items-center py-3 w-mobile-button mb-4 bg-custom-light-green text-base font-medium cursor-pointer hover:bg-black hover:text-custom-light-green hover:border-2 hover:border-custom-light-green md:w-desktop-button md:px-5"
        onClick={(e) =>
          props.generatePassword(e, props.checkedValues, props.passwordLength)
        }
        translate="no"
      >
        GENERATE{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          className="fill-current hover:text-custom-light-green"
        >
          <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
        </svg>
      </button>
    </>
  );
};

export default Button;
