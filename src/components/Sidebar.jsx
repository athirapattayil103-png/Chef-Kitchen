// import React, { useState } from "react";
// // import {
// //   IoHomeOutline,
// //   IoHeartOutline,
// //   IoMailOutline,
// //   IoNotificationsOutline,
// //   IoLogOutOutline,
// // } from "react-icons/io5";
// import shop from"../assets/shop.svg";
// import home from"../assets/home.svg";
// import offer from"../assets/offer.svg";
// import heart from"../assets/heart.svg";
// import mail from"../assets/mail.svg";
// import notification from"../assets/notification.svg";
// import logout from"../assets/logout"
// import { CiShop } from "react-icons/ci";
// import { BiSolidOffer } from "react-icons/bi";

// // const menuItems = [
// //   { id: "home", icon: IoHomeOutline },
// //   { id: "offer", icon: BiSolidOffer },
// //   { id: "heart", icon: IoHeartOutline },
// //   { id: "mail", icon: IoMailOutline },
// //   { id: "notification", icon: IoNotificationsOutline },
// // ];

// const sidebarIcons = [
//   { key: "home", src: home },
//   { key: "offer", src: offer },
//   { key: "heart", src: heart },
//   { key: "mail", src: mail },
//   { key: "notification", src: notificationIcon },
//   { key: "logout", src:logout},
// ];

// const Sidebar = () => {
//   const [active, setActive] = useState("notification");

//   return (
//     <aside className="h-screen w-24 bg-[#0f1229] flex flex-col items-center py-6">
      
//       {/* TOP ICON */}
//       <div className="w-14 h-14 bg-[#1b1f45] rounded-2xl flex items-center justify-center mb-10">
//         <CiShop className="text-orange-400 text-2xl" />
//       </div>

//       {/* MENU */}
//       <div className="flex flex-col items-center gap-10 flex-1">
//         {menuItems.map(({ id, icon: Icon }) => (
//           <div
//             key={id}
//             onClick={() => setActive(id)}
//             className="relative group"
//           >
//             {/* Right curve indicator (ACTIVE / HOVER) */}
//             {(active === id) && (
//               <>
//               {/* top */}
//               <div className="absolute top-[-45%]  -right-4 w-3 h-5 bg-[#1f2430]  z-0" ></div>
//               <div className="absolute top-[-45%]  -right-4 w-3 h-5 bg-[#0f1229] rounded-br-xl z-70" ></div>
              
//               {/* cntr */}
//               {/* <div className="absolute -right-6 w-20 h-14 bg-[#0f1724] rounded-l-[18px] transition-all duration-300 ease-out " /> */}
//                   <div className="absolute -right-6  top-[-15%] w-24 h-20 bg-[#1f2430] rounded-l-[18px] z-10" />

//                 {/* bottom */}
//               <div className="absolute bottom-[-40%]  -right-4 w-3 h-5 bg-[#1f2430]  z-0" ></div>
//               <div className="absolute bottom-[-40%]  -right-4 w-3 h-5 bg-[#0f1229] rounded-tr-xl z-70" ></div>
//               </>
//             )}

//             {/* ICON BOX */}
//             <div
//               className={`
//     hover:shadow-[0_0_45px_rgba(249,145,71,0.9)] relative z-30 w-16 h-16 flex items-center justify-center rounded-2xl cursor-pointer transition-all duration-300
//               ${
//                 active === id
//                   ? "bg-gradient-to-br from-orange-400 to-orange-600"
//                   : "bg-[#1b1f45] group-hover:bg-orange-500/20"
//               }`}
//             >
//               <Icon
//                 className={`text-2xl transition-colors
//                 ${
//                   active === id
//                     ? "text-white"
//                     : "text-orange-400 group-hover:text-orange-300"
//                 }`}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* LOGOUT */}
//       <div className="w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer text-orange-400 hover:bg-[#1b1f45] transition">
//         {/* <IoLogOutOutline className="text-xl" /> */}
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;







import { useState } from "react";
import logoo from "../assets/logoo.svg";

// ✅ VITE + SVGR CORRECT IMPORTS
import HomeIcon from "../assets/home_icon.svg?react";
import OfferIcon from "../assets/offer.svg?react";
import LikeIcon from "../assets/like.svg?react";
import MaleIcon from "../assets/male.svg?react";
import NotifyIcon from "../assets/notify.svg?react";
import ExitIcon from "../assets/logout.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const items = [
    { Icon: HomeIcon, alt: "Home" ,path:"/Menu"},
    { Icon: OfferIcon, alt: "Offers" ,path:"/offers"},
    { Icon: LikeIcon, alt: "Likes",path:"/likes" },
    { Icon: MaleIcon, alt: "Profile",path:"/profile" },
    { Icon: NotifyIcon, alt: "Notifications",path:"/notification" },
  ];

  return (
    <aside className="bg-slate-950 w-[72px] h-screen py-6 flex flex-col items-center gap-6 shadow-lg overflow-hidden">
      
      {/* LOGO */}
      <img src={logoo} alt="Logo" className="w-10 h-10" />

      {/* ICONS */}
      <div className="flex flex-col gap-6 py-4">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(item.path)}
            className="relative w-12 h-12 flex items-center justify-center"
          >
            {/* ACTIVE CURVE */}
            {active === i && (
              <>
                {/* top */}
                <div className="absolute top-[-50%] -right-3 w-3 h-5 bg-slate-900" />
                <div className="absolute top-[-50%] -right-3 w-3 h-5 bg-slate-950 rounded-br-2xl" />

                {/* center */}
                <div className="absolute -right-7 w-20 h-14 bg-slate-900 rounded-l-xl transition-all duration-300" />

                {/* bottom */}
                <div className="absolute bottom-[-50%] -right-3 w-3 h-5 bg-slate-900" />
                <div className="absolute bottom-[-50%] -right-3 w-3 h-5 bg-slate-950 rounded-tr-2xl" />
              </>
            )}

            {/* ICON */}
            <div
              className={`relative z-10 p-2 rounded-md transition-all duration-300
                ${
                  active === i
                    ? "bg-[#FF9F43] shadow-[0_0_18px_rgba(249,115,22,0.75)]"
                    : "bg-transparent hover:shadow-[0_0_16px_rgba(255,159,67,0.55)]"
                }`}
            >
              <item.Icon
                className={`w-5 h-5 transition-all duration-300
                  ${
                    active === i
                      ? "text-white"
                      : "text-[#FF9F43]"
                  }`}
              />
            </div>
          </button>
        ))}
      </div>

      {/* LOGOUT */}
      <button 
      onClick={() => navigate("/")}
      className="mt-auto w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white/5">
        {/* <ExitIcon className="w-5 h-5 text-[#FF9F43]" /> */}
        <img src={ExitIcon} alt="Logout" className="w-5 h-5"/>
      </button>
    </aside>
  );
};

export default Sidebar;
