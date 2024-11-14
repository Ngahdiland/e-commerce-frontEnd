import React from "react";

function NewsLetterBox() {
  const onSubmitHandlre = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
        aspernatur?
      </p>
      <form
        onClick={onSubmitHandlre}
        action=""
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="enter a valid email"
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 "
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
