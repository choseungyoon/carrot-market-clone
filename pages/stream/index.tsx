import { NextPage } from "next";
import Layout from "../components/layout";

const Live: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="py-10 px-4 space-y-4 divide-y-2">
        {[1, 2, 3].map((_, i) => (
          <div className="pt-4 px-4" key={i}>
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video"></div>
            <h3 className="text-gray-700 text-lg mt-2">Let's try potatos</h3>
          </div>
        ))}
        <button className="fixed hover:bg-orange-500 cursor-pointer transition-colors bottom-24 right-5 rounded-full bg-orange-400 shadow-xl text-white p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Live;
