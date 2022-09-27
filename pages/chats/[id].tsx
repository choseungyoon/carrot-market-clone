import type { NextPage } from "next";
import Layout from "../components/layout";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="w-1/2 text-sm text-gray-700 border rounded-md p-2 border-gray-700">
            Hi how much are you selling them for?
          </div>
        </div>
        <div className="flex flex-row-reverse items-center space-x-2 space-x-reverse">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="w-1/2 text-sm text-gray-700 border rounded-md p-2 border-gray-700">
            I want ￦20,000
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="w-1/2 text-sm text-gray-700 border rounded-md p-2 border-gray-700">
            미쳤어
          </div>
        </div>
        <div className="fixed w-full mx-auto max-w-md bottom-0 inset-x-0">
          <div className="flex relative items-center">
            <input
              type="text"
              className="shadow-sm w-full border-gray-300 focus:ring-orange-500 focus:border-orange-600 rounded-full"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0 focus:ring-2 focus:ring-offset-2">
              <span className="flex items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 cursor-pointer">
                &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;
