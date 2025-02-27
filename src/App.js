import React from "react";
import Counter from "./components/Counter";
import RichTextEditor from "./components/RichTextEditor";
import User from "./components/User";

const App = () => {
  return (
    <div className="lg:px-40 px-3 py-10 bg-slate-200 text-slate-900">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        <Counter />
        <RichTextEditor />
      </div>
      <User />
    </div>
  );
};

export default App;
