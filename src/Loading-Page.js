import React, { useEffect, useState } from 'react';
import App from './App';
import './style/Loading-Page.scss';
import './style/App.scss';

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState('true');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading('false');
    }, 5900);
    // setTimeout(() => {
    //   setIsLoading("false");
    // }, 100);
  }, [isLoading]);

  const handleLoading = () => {
    if (isLoading === 'true') {
      return (
        <div className="loading-container">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="circle"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M375 200C375 296.65 296.65 375 200 375C103.35 375 25 296.65 25 200C25 135.473 59.9241 79.1023 111.901 48.7597V110.333C88.691 133.14 74.2958 164.889 74.2958 200C74.2958 269.425 130.576 325.704 200 325.704C269.425 325.704 325.704 269.425 325.704 200C325.704 130.576 269.425 74.2958 200 74.2958C172.33 74.2958 146.749 83.2358 125.986 98.3848V41.3762C148.466 30.8691 173.547 25 200 25C296.65 25 375 103.35 375 200Z"
              fill="#AAC1CD"
            />
            <path
              id="h-word"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M125.986 44.0142H175.282V260.211C175.282 273.824 164.246 284.859 150.634 284.859C137.021 284.859 125.986 273.824 125.986 260.211V44.0142ZM175.282 171.62H224.577L224.577 139.93C224.577 126.317 235.613 115.282 249.225 115.282C262.838 115.282 273.873 126.317 273.873 139.93V259.648C273.873 273.26 262.838 284.296 249.225 284.296C235.613 284.296 224.577 273.26 224.577 259.648L224.577 220.915H175.282V171.62ZM125.986 44.0142V98.3848C140.4 87.868 157.136 80.3436 175.282 76.7254V44.0142H125.986Z"
              fill="#AAC1CD"
            />
          </svg>
        </div>
      );
    } else if (isLoading === 'false') {
      return <App />;
    }
  };

  return <>{handleLoading()}</>;
};

export default LoadingPage;
