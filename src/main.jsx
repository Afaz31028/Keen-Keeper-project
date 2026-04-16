import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router";
import Root from "./Component/Root/Root.jsx";
import HomePage from "./Component/HomePage/HomePage.jsx";
import FriendDetails from "./Component/FriendDetails/FriendDetails.jsx";
import Interaction from "./Component/Interaction/Interaction.jsx";
import TimelinePage from "./Component/TimelinePage/TimelinePage.jsx";
import FriendContext from "./Component/FriendContext/FriendContext.jsx";
import Statistics from "./Component/Statistics/Statistics.jsx";
import { ToastContainer } from "react-toastify";
import WrongPath from "./Component/WrongPath/WrongPath.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/:friendId",
        loader: async({params})=> {
          const res= await fetch("/friends.json");
          const data= await res.json();

          const filteredFriend= data.find(friend=> friend.id == params.friendId);
          return filteredFriend;
        },
        Component: FriendDetails
      },
      {
        path:"/timeline",
        Component: TimelinePage
      },
      {
        path:"/stat",
        Component: Statistics
      }
    ],
    errorElement: <WrongPath></WrongPath>
  },
]);

createRoot(document.getElementById("root")).render(
  <FriendContext>
      <StrictMode>
        <RouterProvider router={router}></RouterProvider>
          <ToastContainer />
    </StrictMode>,
  </FriendContext>
);
