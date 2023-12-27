import React from "react";
import GithubContext from "../../context/Github/GithubContext";
import { useContext } from "react";
import UserList from "../user/UserList";
import Image from "../../../imgs/YlWC.gif";
import Alert from "../Alert";
import { useIntercom } from "react-use-intercom";
function Home() {
  const {
    loading,
    searchName,
    userList,
    inputChangeHandler,
    searchHandler,
    clearHandler,
  } = useContext(GithubContext);
  const { boot, shutdown, hide, show, update } = useIntercom();

  return (
    <div
      className={`flex flex-col container mb-10 p-8 home-screen my-48 md:my-20 mx-auto ${
        userList.length === 0 && "justify-center "
      }`}
    >
      <button onClick={boot}>Boot intercom! ☎️</button>;
      <Alert />
      <div className="grid items-center grid-cols-1 mb-5 md:grid-cols-2">
        <form action="">
          <div className="relative flex flex-row flex-col justify-between form-control md:flex-row ">
            <input
              type="text"
              name="name"
              value={searchName}
              placeholder="Enter search name"
              onChange={(e) => {
                inputChangeHandler(e);
              }}
              className="w-full mb-5 text-black bg-gray-200 input input-lg md:mb-0 focus:outline-none placeholder:text-sm sm:placeholder:text-lg "
            />
            <button
              className="absolute top-0 right-0 rounded-l-none btn btn-lg sm:w-36"
              type="submit"
              onClick={(e) => searchHandler(e)}
            >
              {loading ? (
                <img className="w-4 md:w-16" src={Image} alt="spinner" />
              ) : (
                "GO"
              )}
            </button>

            {searchName.length > 0 && (
              <button
                onClick={clearHandler}
                className="clear btn btn-warning btn-lg rounded-full min-h-[4px] max-md:h-8 w-8 p-0 md:rounded-xl  md:w-36 absolute max-md:top-4 max-sm:right-24 max-md:right-40 -right-40 max-md:opacity-50 "
              >
                {window.innerWidth < 768 ? "X" : `Clear`}
              </button>
            )}
          </div>
        </form>
      </div>

      {userList.length > 0 && <UserList />}
    </div>
  );
}

export default Home;
