import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router";
import Root from "./Component/Root/Root.jsx";
import HomePage from "./Component/HomePage/HomePage.jsx";
import FriendDetails from "./Component/FriendDetails/FriendDetails.jsx";
import Interaction from "./Component/Interaction/Interaction.jsx";


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
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
