import { shortenTitle } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CircleCheckBig,
  Ellipsis,
  OctagonX,
  Trash,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { TasksType } from "@/pages/Tasks";
import { EditTask } from "./EditTask";

interface TaskListProps {
  tasks: TasksType[];
  deleteTask: (id: number) => void;
  editTask: (id: number, title: string) => void;
  toggleTaskStatus: (id: number, completed: boolean) => void;
}
function TaskList({
  tasks,
  deleteTask,
  editTask,
  toggleTaskStatus,
}: TaskListProps) {
  return (
    <div className="flex flex-col items-start gap-3 w-full md:w-[500px] lg:w-[600px]">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between w-full border rounded-sm border-slate-400 p-2"
        >
          <div className="flex items-center gap-2">
            {task.completed ? (
              <div>
                <OctagonX className="w-4 h-4 text-rose-500 cursor-pointer" onClick={()=>toggleTaskStatus(task.id , task.completed)}/>
              </div>
            ) : (
              <div>
                <CircleCheckBig className="w-4 h-4 text-emerald-500 cursor-pointer" onClick={()=>toggleTaskStatus(task.id , task.completed)}/>
              </div>
            )}
            <h3 className="text-sm text-slate-600">
              {shortenTitle(task.title, 35)}
            </h3>
          </div>
          <Popover>
            <PopoverTrigger>
              <Ellipsis className="w-4 h-4" />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col items-start gap-2 w-[100px] min-h-[50px] justify-start px-0 py-2">
                <EditTask title={task.title} editTask={editTask} id={task.id}/>
              <Separator />
              <Button
                variant={"ghost"}
                size={"sm"}
                className="w-full h-full hover:bg-transparent"
                onClick={() => deleteTask(task.id)}
              >
                <Trash className="w-3 h-3 mr-2 text-rose-500" />
                Delete
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
