import { NextPage } from "next";
import Layout from "../components/layout";

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500"></div>
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            ></input>
          </label>
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-center">
            Email address
          </label>

          <input
            id="input"
            type="email"
            className="appearance-none w-full px-3 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-center">
            Phone number
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-300 select-none">
              +82
            </span>
            <input
              id="input"
              type="number"
              className="appearance-none w-full px-3 border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
              required
            />
          </div>
        </div>
        <div>
          <button className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
            Update profile
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
