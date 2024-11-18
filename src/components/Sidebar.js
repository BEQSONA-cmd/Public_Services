import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";

const links = [
    {
      name: "Page 0",
      icon: <MdOutlineAnalytics className="mr-2 text-2xl" />,
      link: "/page0"
    },
    {
      name: "Page 1",
      icon: <MdOutlineAnalytics className="mr-2 text-2xl" />,
      link: "/page1"
    },
    {
      name: "Analytics",
      icon: <MdOutlineAnalytics className="mr-2 text-2xl" />,
      link: "/analytics"
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline className="mr-2 text-2xl" />,
      link: "/settings",
    }
  ]
  
export default function Sidebar() {
    return (
      <nav className="bg-gray-800 p-6 min-h-screen w-60 space-y-4 border-r border-black">
        <div className="flex items-center mb-8">
          <a href="/" className="text-gray-300 duration-300 hover:text-white flex items-center text-3xl font-semibold">
            <img src="/image.png" alt="Logo" /> </a>
        </div>
        <ul className="space-y-4 text-lg">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.link} className={"text-gray-300 duration-300 hover:bg-gray-700 hover:text-white p-3 rounded-lg flex items-center " + link?.className}>
                {link.icon}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

