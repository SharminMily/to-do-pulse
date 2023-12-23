import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(err => console.log(err))
    }
   
    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 1400 && setOpenNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-6 mb-4 flex text-black flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
       <li> <NavLink to="/">Home</NavLink></li>
       {/* <li> <NavLink to="/taskManagement">Task Management</NavLink></li>       */}
       <li> <NavLink to="/dashboard">Dashboard</NavLink></li>      
       <li> <NavLink to="/blogs">Blogs</NavLink></li>      
       <li> <NavLink to="/contactUs">contact Us</NavLink></li>      
        {/* <li>
            <NavLink to='/blogs' className="text-white bg-gradient-to-r from-pink-300 via-pink-700 to-pink-200 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-300/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Blogs
            </NavLink>
        </li> */}

        { user?. uid ?  
        <li> <Link to="/login">
              <Button onClick={handleLogOut} variant="gradient"
                size="sm"
                className="hidden lg:inline-block"> LogOut                
              </Button>
              </Link> 
        </li> :  <li> <Link to="/login">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"> Login                
              </Button>
              </Link> 
        </li>}

        <li> 
             {/* login,logout, user */}
             <div>
                    {user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img className="rounded-full" src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="">                            
                               
                        </ul>
                    </div>
                        :
                        <NavLink to="/login"></NavLink>
                    }
                  </div>   
        </li>

      </ul>
    );

    return (
        <>
            <div className="m-">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">

          <div className="mt-0 cursor-pointer font-medium">
          
           <img className="w-20  h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_eakF4m3Ogn_H15bBgMwQmHB1dvVNWtc7vQ&usqp=CAU" alt="" />
          </div>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
                  
              {/* <Link to="/Register">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"> register               
              </Button>
              </Link> */}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>           
          </div>
        </MobileNav>

      </Navbar>
      {/* <div className="mx-auto max-w-screen-lg pb-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
        <div  color="blue-gray" className="mb-2">
          What is Material Tailwind
        </div>
        <div color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less        
          
        </div>
      </div> */}
    </div> 
        </>
    );
};

export default Header;