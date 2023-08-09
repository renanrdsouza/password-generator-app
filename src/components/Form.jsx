const Form = () => {
  return (
    <>
      <form
        className="flex min-w-full flex-col items-center bg-custom-dark-gray mt-4"
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-y-2 mt-4">
          <h2 className="text-custom-light-gray" translate="no">Character Length</h2>
          <p className="grid-row-end place-self-end text-custom-light-green">
            {passwordLength}
          </p>
          <input
            type="range"
            step={1}
            min={8}
            max={20}
            className="col-start-1 col-end-3 accent-custom-light-green dark:bg-gray-700"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-custom-light-gray w-mobile-checkbox-inputs my-6 gap-y-4">
          <label htmlFor="uppercase" translate="no">
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              className="me-5 appearance-none h-5 w-5 border-2 checked:bg-custom-light-green checked:border-0 checked:content-check-icon checked:after:block p-0.5"
              onChange={handleChecked}
            />
            Include Uppercase Letters
          </label>
          <label htmlFor="lowercase" translate="no">
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              className="me-5 appearance-none h-5 w-5 border-2 checked:bg-custom-light-green checked:border-0 checked:content-check-icon checked:after:block p-0.5"
              onChange={handleChecked}
            />
            Include Lowercase Letters
          </label>
          <label htmlFor="numbers" translate="no">
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              className="me-5 appearance-none h-5 w-5 border-2 checked:bg-custom-light-green checked:border-0 checked:content-check-icon checked:after:block p-0.5"
              onChange={handleChecked}
            />
            Include Numbers
          </label>
          <label htmlFor="symbols" translate="no">
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              className="me-5 appearance-none h-5 w-5 border-2 checked:bg-custom-light-green checked:border-0 checked:content-check-icon checked:after:block p-0.5"
              onChange={handleChecked}
            />
            Include Symbols
          </label>
        </div>
      </form>
    </>
  )
}

export default Form;