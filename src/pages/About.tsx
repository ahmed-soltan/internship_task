import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-2">
      <div className="w-full h-[400px] bg-gradient-to-b from-orange-200 to-white flex items-center justify-center gap-5 p-2 flex-col mb-10">
        <h1 className="text-center text-slate-800 text-3xl font-semibold">
          About Our Application
        </h1>
        <p className="text-slate-600">
          Welcome to TaskMaster, your go-to platform for efficient task
          management. Our application is designed to help you organize, track,
          and complete your tasks with ease and precision.
        </p>
      </div>
      <Separator />
      <div className=" py-10 max-w-[750px] flex flex-col items-center justify-center gap-5 p-2">
        <h1 className="text-center max-w-[200px] text-slate-700 text-3xl font-medium border-2 border-orange-500 rounded-md px-3 py-2">
          Our Purpose
        </h1>
        <p className="text-slate-600 text-center">
          At TaskMaster, we believe in simplifying your work and personal life
          by providing a robust task management solution. Our mission is to
          offer a user-friendly and intuitive platform that enhances your
          productivity and ensures you stay on top of your responsibilities.
          <br />
          <br />
          Whether you're looking to manage your daily tasks, plan long-term
          projects, or collaborate with a team, TaskMaster is built to deliver a
          seamless and efficient experience. We are committed to continuous
          improvement and regularly update our features to ensure you get the
          best possible service.
        </p>
      </div>
      <Separator/>
      <div className=" py-10 max-w-[750px] flex flex-col items-center justify-center gap-5 p-2">
        <h1 className="text-center max-w-[300px] text-slate-700 text-3xl font-medium border-2 border-orange-500 rounded-md px-3 py-2">
          Why Choose Us?
        </h1>
        <ul className="flex flex-col items-start gap-5 p-2">
          <li>
            <span className="font-semibold">User-Friendly Interface:</span>{" "}
            TaskMaster is designed with you in mind. We prioritize ease of use
            and ensure that our interface is intuitive and accessible to
            everyone.
          </li>
          <li>
            <span className="font-semibold">Comprehensive Features</span> From
            task creation and tracking to project management and team
            collaboration, we offer a wide range of functionalities to cater to
            all your needs.
          </li>
          <li>
            <span className="font-semibold">Reliability:</span> We understand
            the importance of dependability. TaskMaster is built to perform
            consistently and reliably, so you can count on us.
          </li>
          <li>
            <span className="font-semibold">Security:</span> Your data security
            is our top priority. We implement robust security measures to
            protect your information and ensure your privacy.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
