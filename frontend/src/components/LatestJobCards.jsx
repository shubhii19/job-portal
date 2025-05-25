import { Badge } from "@/components/ui/badge";
import React from "react";

const LatestJobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Company name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate?</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          12 Positon
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          Part time
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          12 LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;




// 5:17:54
