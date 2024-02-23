/* eslint-disable no-undef */
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <>
      <div className=" max-w-screen-lg mx-auto flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 bg-white p-5 pl-10 rounded-3xl gap-8">
          <div className="">
            <h1 className=" text-4xl font-bold m-4 mt-10">Stay updated!</h1>
            <p className="m-4 text-sm max-w-xs">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <ul className="m-4 ">
              <li className="flex gap-3 p-1 pl-0">
                <img src="../public/assets/icon-list.svg" alt="list-icon" />
                Product discovery and building what matters
              </li>
              <li className="flex gap-3 p-1 pl-0">
                {" "}
                <img
                  src="../public/assets/icon-list.svg"
                  alt="list-icon"
                />{" "}
                Measuring to ensure updates are a success
              </li>
              <li className="flex gap-3 p-1 pl-0">
                {" "}
                <img src="../public/assets/icon-list.svg" alt="list-icon" /> And
                much more!
              </li>
            </ul>
            <Form />
          </div>

          <div className=" m-0 p-0">
            <img src="/assets/illustration-sign-up-desktop.svg" alt="img" className="m-0" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
