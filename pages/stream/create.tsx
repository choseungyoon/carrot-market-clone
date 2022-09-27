import { NextPage } from "next";
import Layout from "../components/layout";

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-10 space-y-5">
        <div className="my-5">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-center"
          >
            Name
          </label>
          <div className="rounded-md flex items-center shadow relative">
            <input
              className="pl-7 appearance-none w-full px-3 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
              id="name"
              type="text"
            />
          </div>
          <label
            htmlFor="price"
            className="mb-1 text-sm font-medium text-center"
          >
            Price
          </label>
          <div className="rounded-md flex items-center shadow relative">
            <div className="absolute pointer-events-none left-0 pl-3 flex items-center justify-center">
              <span className="text-gray-300 text-sm">$</span>
            </div>
            <input
              className="pl-7 appearance-none w-full px-3 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
              id="price"
              type="text"
              placeholder="0.00"
            />
            <div className="absolute pointer-events-none right-0 pr-3 flex items-center">
              <span className="text-gray-300">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label>Description</label>
          <textarea
            className="mt-1 shadow-sm w-full focus:ring-1 focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
            rows={4}
          />
        </div>
        <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          Go live
        </button>
      </div>
    </Layout>
  );
};

export default Create;
