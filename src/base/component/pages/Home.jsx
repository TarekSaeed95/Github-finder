import React from "react";
import GithubContext from "../../context/Github/GithubContext";
import { useContext } from "react";
import UserList from "../user/UserList";
import Image from "../../../imgs/YlWC.gif";
import Alert from "../Alert";
function Home() {
  const {
    loading,
    searchName,
    userList,
    inputChangeHandler,
    searchHandler,
    clearHandler,
  } = useContext(GithubContext);
  console.log(window.innerWidth);
  return (
    <div
      className={`flex flex-col container mb-10 p-8 home-screen my-48 md:my-20 mx-auto ${
        userList.length === 0 && "justify-center "
      }`}
    >
      <Alert />
      <div className="grid grid-cols-1 md:grid-cols-2  items-center mb-5">
        <form action="">
          <div className="form-control relative flex  md:flex-row flex-col   flex-row justify-between ">
            <input
              type="text"
              name="name"
              value={searchName}
              placeholder="Enter search name"
              onChange={(e) => {
                inputChangeHandler(e);
              }}
              className="input w-full input-lg mb-5 md:mb-0 bg-gray-200 text-black focus:outline-none	placeholder:text-sm sm:placeholder:text-lg "
            />
            <button
              className="btn btn-lg sm:w-36 rounded-l-none absolute top-0 right-0"
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
