import { Input } from "@/components/ui/input";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-10 w-full">
      <h1 className="text-center text-3xl font-semibodld">Contact us</h1>
      <form
        action=""
        className="flex flex-col items-center justify-center gap-5 max-w-[700px]"
      >
        <Input placeholder="Enter Your Name" className="w-full"/>
        <Input placeholder="Enter Your Email" type="email" className="w-full"/>
        <textarea
          placeholder="Enter Your Message"
          cols={30}
          rows={5}
          className="border p-2 w-full"
        />
      </form>
    </div>
  );
};

export default Contact;
