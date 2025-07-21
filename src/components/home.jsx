import { useEffect, useState } from "react";

export function Home() {
  const [view, setView] = useState(() => {
    const savedCount = localStorage.getItem("countervalue");
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("notificationCount");
    return savedCount !== null ? parseInt(savedCount) : 0;
  });
  useEffect(() => {
    setView((prev) => {
      const newCount = prev + 1;
      localStorage.setItem("countervalue", JSON.stringify(newCount));
      return newCount;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const newCount = prev + 1;
        localStorage.setItem("notificationCount", newCount.toString());
        return newCount;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-linear-to-r from-gray-400 to-gray-500 p-26 ">
        <div className=" md:ml-180  lg:ml-220  xl:ml-270">
          <button className="rounded-full bg-amber-500 border-gray-500 w-60 flex p-2 justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                <path
                  fillRule="evenodd"
                  d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-2">
              <strong>Enhance Cover Image</strong>
            </div>
          </button>
        </div>
      </div>
      <div>
        {/* For the Relative Circle Between Two Divs */}
        <div className="relative w-full flex justify-start -mt-24 z-20 ml-2">
          <div className="rounded-full border-4 border-white overflow-hidden w-48 h-48 shadow-lg bg-white">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ffe7d9cd-31ac-427a-85a8-c3ebab8d43b5.png"
              alt="Man sitting on large river rock outdoors in natural landscape with water, vegetation, and mountains in the background"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6df07641-dc92-49c1-ad67-bb499b22ca95.png";
              }}
            />
          </div>
          <div className="flex">
            <div className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-323">
                    {count}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white flex mt-3">
          <h1 className="text-4xl ml-3">Subham Kumar</h1>
          <h3 className="ml-2 text-2xl text-gray-500">He/Him</h3>
          <div className="text-blue-600 outline-2 rounded-full justify-center outline-dotted p-2 ml-2">
            <button className="flex text-1xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <h3>Add Verification Badge</h3>
            </button>
          </div>
          <h3 className="text-2xl md:ml-27">Name of Institution</h3>
        </div>
      </div>
      <div className="bg-white">
        <p className="mr-150 ml-2 mt-3 ">
          "Full Stack Developer | HTML, CSS, JavaScript, React | Node.js,
          Express, Python, PHP, Java, Spring Boot| MongoDB, MySQL, PostgreSQL |
          AWS, Docker, CI/CD"
        </p>
      </div>
      <div className="ml-3 mt-5 w-55">
        <div className="flex justify-between">
          <h3>Profile Viewers:</h3>{" "}
          <h3 className="text-blue-500 ml-5">{view}</h3>
        </div>
        <div className="flex justify-between">
          <h3>Post Impressions:</h3>{" "}
          <h3 className="text-blue-500 ml-5">23455</h3>
        </div>
      </div>
    </div>
  );
}
