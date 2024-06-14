import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface AddTaskProps {
  addTask: (title: string) => void;
  title?: string;
}

const formSchema = z.object({
  title: z.string().min(3).max(100),
});

const AddTask = ({ addTask , title}: AddTaskProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "" || title,
    },
  });

  const {isSubmitting } = form.formState


  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    addTask(data.title)
    console.log(data)
    form.reset()
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-[500px] lg:w-[600px] flex gap-2">
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="w-full">
                <Input
                  placeholder="Type a Task"
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button variant={"default"} disabled={isSubmitting}>Add Task</Button>
      </form>
    </Form>
  );
};

export default AddTask;
