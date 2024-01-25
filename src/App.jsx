/* eslint-disable react/no-unknown-property */
import { data } from "./data";

// Functional component App
export default function App() {
  return (
    <div className="  grid place-content-center mt-10">
      <div className=" flex items-center flex-col">
        <button className="border rounded-md px-20 py-3">
          {data[0]?.title}
        </button>
        <span className="w-[1px] h-6 bg-black/10"></span>
        <div className="border px-3 rounded-md py-2 text-blue-400">+</div>
        <span className="w-[1px] h-6 bg-black/10"></span>
        <button className="border rounded-md px-20 py-3">
          {data[1]?.title}
        </button>
        <span className="w-[1px] h-6 bg-black/10"></span>
        <div className="border px-3 rounded-md py-2 text-blue-400">+</div>
        <span className="w-[1px] h-6 bg-black/10"></span>{" "}
        <div>
          <button className="border rounded-md px-20 py-3">
            {data[2]?.title}
          </button>
          <div className="flex items-center justify-between px-10">
            <span className="w-[1px] h-6 bg-black/10"></span>
            <span className="w-[1px] h-6 bg-black/10"></span>
          </div>
          <div className="flex gap-2 items-center justify-between">
            {data[2]?.child.map((item, index) => (
              <div key={index} className=" flex flex-col items-center">
                <button className="border rounded-md space-x-2 px-3 py-1">
                  {item.title}
                </button>
                <span
                  className={`w-[1px] h-16 bg-black/30 ${
                    index % 2 === 0 ? "rotate-12" : "-rotate-12"
                  }`}
                ></span>
                <div className="border px-3 rounded-md py-2 text-blue-400">
                  +
                </div> 
        <span className="w-[1px] h-6 bg-black/10"></span>{" "}

              </div>
            ))}
          </div>

          <div className=" flex items-start justify-between  ">
            {data[2]?.child?.map((item, index) => (
              <button key={index} className="border rounded-md px-2 py-2">
                {item?.child[0]?.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
