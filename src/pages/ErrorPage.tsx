import type { FC } from "react";
import { Link } from "react-router-dom";

const ErrorPage: FC = () => {
  return (
    <div className='not_found'>
      <div>
        <h1 className='text-5xl font-bold mb-4'>404</h1>
        <p className='text-lg mb-6'>
          Sorry, the page you are looking for could not be found.
        </p>
        <Link to='/'>Go Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
