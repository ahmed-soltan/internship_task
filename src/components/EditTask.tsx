import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PencilRuler } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  title: z.string().min(3).max(100),
});

export function EditTask({
  id,
  title,
  editTask,
}: {
  id: number;
  title: string;
  editTask: (id: number, title: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title || "",
    },
  });

  const {isSubmitting } = form.formState

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    editTask(id, data.title);
    console.log(data);
    form.reset();
    setOpen(false); // Close the dialog after form submission
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          size={"sm"}
          className="w-full h-full hover:bg-transparent"
        >
          <PencilRuler className="w-3 h-3 mr-2" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Make changes to your Task here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full md:w-[500px] lg:w-[600px] flex gap-3"
          >
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="w-full">
                    <Input placeholder="Type a Task" {...field} />
                  <FormMessage/>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button variant={"default"} disabled={isSubmitting}>Edit Task</Button>
          </form>
        </Form>
        <DialogFooter>
          <DialogClose>
            <Button type="button" variant={"secondary"} onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
