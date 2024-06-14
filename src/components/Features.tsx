import { PencilRuler, Sparkles, Trash, WandSparkles } from "lucide-react";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-9">
      <h1 className="flex items-center gap-3 text-3xl border-2 border-orange-400 p-3 rounded-md">
        <Sparkles className="w-7 h-7 text-orange-400" />
        <span className=" text-slate-600">Features</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="flex items-start min-w-[350px] h-[130px] border gap-4 p-3 border-orange-200 rounded-md ">
          <WandSparkles className="w-5 h-5" />
          <p className="text-slate-600 max-w-[250px]">
            Create new tasks by entering all the necessary details and saving
            them to your task list for future reference.
          </p>
        </div>
        <div className="flex items-start min-w-[350px] h-[130px] border gap-4 p-3 border-orange-200 rounded-md ">
          <PencilRuler className="w-5 h-5" />
          <p className="text-slate-600 max-w-[250px]">
            Edit existing tasks to update their details or change their status
            from pending to completed with ease.
          </p>
        </div>
        <div className="flex items-start min-w-[350px] h-[130px] border gap-4 p-3 border-orange-200 rounded-md ">
          <Trash className="w-5 h-5" />
          <p className="text-slate-600 max-w-[250px]">
            Delete tasks that are no longer needed or relevant to keep your task
            list neat, organized, and up to date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
