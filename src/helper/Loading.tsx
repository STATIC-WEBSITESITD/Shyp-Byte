import  { type FC } from "react";

const Loading: FC= () => {
  return (
    <div className='preloader'>
      <div className='cssload-loading'>
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
};

export default Loading;
