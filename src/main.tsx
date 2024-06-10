import ReactDOM from "react-dom/client";
import "./index.css";
import Mainlayout from "./common/components/_organisms/Mainlayout";
import { RouterProvider } from "react-router-dom";
import { router } from "./common/Routing/common";



ReactDOM.createRoot(document.getElementById("root")!).render(
    
    <Mainlayout>
        <RouterProvider router={router} />
    </Mainlayout>
);
