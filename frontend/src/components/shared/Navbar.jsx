import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";
import { LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
// import { PopoverTrigger } from "@radix-ui/react-popover";

const Navbar = () => {

  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogoutHandler = async ()=>{
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
      if(res.data.success){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
      
    }
  }


  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto  max-w-7xl h-16 ">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-blue-400">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login"><Button variant="outline">Login</Button></Link>
              <Link to="/signup"><Button className="bg-[#42a4f9] hover:bg-[#3D90D7]">SignUp</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div>
                  <div className="gap-2 flex space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Patel Mern Stack</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex w-fit  items-center gap-2 cursor-pointer">
                      <User />
                      <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                    </div>
                    <div className="flex w-fit  items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button onClick={LogoutHandler} variant="link">LogOut</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;






// 7:41:00