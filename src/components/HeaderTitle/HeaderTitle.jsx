import React from "react";

const HeaderTitle = ({title, subTitle}) => {
  return (
    <div>
      <div className="mx-auto text-center mt-5">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
         {title}
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {subTitle}
        </p>
        <hr />
      </div>
    </div>
  );
};

export default HeaderTitle;
