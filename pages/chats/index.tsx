import { NextPage } from "next";
import Layout from "../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="py-10 divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div className="pl-4 px-4 flex mb-3 py-3  items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-slate-300" />
            <div>
              <p className=" text-gray-900">Steve Jebs</p>

              <p className="text-sm font-medium">See you tomorrow!</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
