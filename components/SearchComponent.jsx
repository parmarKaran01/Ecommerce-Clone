import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productState } from "../reduxToolkit/productSlice";
export default function SearchComponent({ showSearch, setShowSearch }) {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data, status } = useSelector(productState);

  const handleQuery = (value) => {
    setQuery(value);
    const newFilteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredData(newFilteredData);
  };
  return (
    <div className="flex flex-col w-2/5 h-full z-40 items-center">
      <div className="flex w-full h-3/6 items-center justify-center rounded-2xl bg-white">
        <input
          type="text"
          placeholder="Enter Keywords"
          className="w-full h-3/6 rounded-2xl indent-4 outline-none text-black text-sm"
          onChange={(e) => handleQuery(e.target.value)}
        />
        <button
          onClick={() => {
            setShowSearch(false);
          }}
        >
          <XMarkIcon className="w-6 h-6 cursor-pointer text-black mr-4" />
        </button>
      </div>
      {/* this is the suggestion section  */}
      {filteredData.length > 0 && (
        <div className="h-[200px] w-2/5 bg-slate-500 z-40 items-center text-black mt-14 absolute  ">
          {filteredData
            .filter((item) => {
              return item.name.toLowerCase().includes(query.toLowerCase());
            })
            .map((item) => {
              return <div className="pl-4 cursor-pointer w-full h-[35px] bg-slate"
                onClick={() => {
                    console.log(item.name)
                }}
              >{item.name}</div>;
            })}
        </div>
      )}
    </div>
  );
}
