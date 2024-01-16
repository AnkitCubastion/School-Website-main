import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <main className="d-flex align-items-center justify-content-center min-vh-100 px-4">
        <div className="text-center">
          <p className="display-1 font-weight-bold text-primary">404</p>
          <h1 className="mt-4 display-3 font-weight-bold">Page not found</h1>
          <p className="mt-4 lead">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-5">
            <Link to="/" className="btn btn-secondary">
              Go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="d-flex align-items-center justify-content-center min-vh-100 px-4">
        <div className="text-center">
          <p className="display-1 font-weight-bold text-primary">
            {error?.status}
          </p>
          <h1 className="mt-4 display-3 font-weight-bold">There is an Error</h1>
          <p className="mt-4 lead">{error?.error?.message}</p>
          <div className="mt-5">
            <Link to="/" className="btn btn-secondary">
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error;
