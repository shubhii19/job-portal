// import React, { useState } from "react";
// import { Avatar, AvatarImage } from "./ui/avatar";
// import { Button } from "./ui/button";
// import { Label } from "./ui/label";
// import { Badge } from "./ui/badge";
// import Navbar from "./shared/Navbar";
// import { Contact, Mail, Pen } from "lucide-react";
// import AppliedJobTable from "./AppliedJobTable";
// import UpdateProfileDialog from "./UpdateProfileDialog";
// import { useSelector } from "react-redux";
// import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

// // const skills = ["Html", "CSS", "JavaScript", "java"];

// const Profile = () => {
//   useGetAppliedJobs();
//   const [open, setOpen] = useState(false);
//   const { user } = useSelector((store) => store.auth);
//   console.log(user);
//   const isResume = user?.profile?.resume;
//   console.log(user);

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
//         <div className="flex justify-between">
//           <div className="flex items-center gap-4">
//             <Avatar className="h-24 w-24">
//               <AvatarImage
//                 src={user?.profile?.profilePhoto}
//                 alt="profile"
//               />
//             </Avatar>
//             <div>
//               <h1 className="font-medium text-xl">{user?.fullname}</h1>
//               <p>{user?.profile?.bio}</p>
//             </div>
//           </div>
//           <Button
//             onClick={() => setOpen(true)}
//             className="text-right"
//             variant="outline"
//           >
//             <Pen />
//           </Button>
//         </div>
//         <div className="my-5">
//           <div className="flex items-center gap-3 my-2">
//             <Mail />
//             <span>{user?.email}</span>
//           </div>
//           <div className="flex items-center gap-3 my-2">
//             <Contact />
//             <span>{user?.phoneNumber}</span>
//           </div>
//         </div>
//         <div className="my-5">
//           <h1>Skills</h1>
//           <div className="flex items-center gap-1">
//             {user?.profile?.skills.length !== 0 ? (
//               user?.profile?.skills.map((item, index) => (
//                 <Badge key={index}>{item}</Badge>
//               ))
//             ) : (
//               <span>NA</span>
//             )}
//           </div>
//         </div>
//         <div className="grid w-full max-w-sm items-center gap-1.5">
//           <Label className="text-md font-bold">Resume</Label>
//           {/* {
//                         isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.file?.name}</a> : <span>NA</span>
//                     } */}
//           {isResume ? (
//             <a
//               target="_blank"
//               href={user?.profile?.resume}
//               className="text-blue-500 hover:underline cursor-pointer"
//             >
//               {user?.profile?.resumeOriginalName || "Download Resume"}
//               {/* {user?.profile?.resume?.split("/").pop() || "Download Resume"} */}
//             </a>
//           ) : (
//             <span>NA</span>
//           )}
//         </div>
//       </div>
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl">
//         <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
//         {/* Applied Job Table   */}
//         <AppliedJobTable />
//       </div>
//       <UpdateProfileDialog open={open} setOpen={setOpen} />
//     </div>
//   );
// };

// export default Profile;






import React, { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import Navbar from "./shared/Navbar";
import { Contact, Mail, Pen } from "lucide-react";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const isResume = !!user?.profile?.resume;
  const skills = user?.profile?.skills || [];

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        {/* Profile Header */}
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user?.profile?.profilePhoto}
                alt="Profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl capitalize">
                {user?.fullname}
              </h1>
              <p>{user?.profile?.bio || "No bio provided"}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen size={16} className="mr-2" />
            Edit
          </Button>
        </div>

        {/* Contact Info */}
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail size={18} />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact size={18} />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="my-5">
          <h1 className="font-semibold">Skills</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.length > 0 ? (
              skills.map((item, index) => (
                <Badge key={index} variant="outline">
                  {item}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user.profile.resume}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {user.profile.resumeOriginalName || "Download Resume"}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>

      {/* Applied Jobs */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5 px-4">Applied Jobs</h1>
        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
