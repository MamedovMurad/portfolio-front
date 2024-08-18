import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignUpPage from "../pages/auth/signup";
import LoginPage from "../pages/auth/login";
import ProtectedRoutes from "./protectRouter";
import { Suspense } from "react";
import MainLayout from "../layouts";
import PortfolioList from "../pages/portfolio";
import PubcliView from "../pages/portfolio/PublicView";




const router = createBrowserRouter([
  {
    
    
    
         path: "/",
           element: <MainLayout />,
          children: [
             {
           path: '/portfolios',
             element: <PortfolioList />
             },
            {path:"/portfolios/:id",
              element: <PubcliView/>
            }
            ],
  },
  { path: "sign-up", element: <SignUpPage /> },
  { path: "login", element: <LoginPage /> },
  // {
  //   path: "/register/verify",
  //   element: (<VerifyPage />),
  // },

  {
    element: <ProtectedRoutes />,
    // children: [
    //   {
    //     path: "/",
    //     element: <LayoutDashboard />,
    //     children: [
    //       {
    //         path: '/companies',
    //         element: <Companies />
    //       },
    //       {
    //         path: '/settings',
    //         element: <Settings />
    //       },
    //       {
    //         path: '/roles',
    //         element: <RolePages />
    //       },
    //       {
    //         path: '/branches',
    //         element: <BranchPage />
    //       },
    //       {
    //         path: '/positions',
    //         element: <Positions />
    //       },
    //       {
    //         path: 'customers',
    //         element: <Customerpage />,
     
    //       },
    //       {
    //         path: 'customer/create',
    //         element: <AddCustomer />,
     
    //       },
    //       {
    //         path: 'customer/update/:id',
    //         element: <AddCustomer />,
     
    //       },
    //       {
    //         path:'/hotel-src',
    //         element:<OtelSrc/>
    //       },
    //       {
    //         path:'/hotels',
    //         element:<OtelPage/>
    //       },
    //       {
    //         path:'/departments',
    //         element:<DepartmentPage/>
    //       }
    //       // { path: "/settings", 
    //       //             element: <Settings/>, 
    //       //                       children:[{path:"/settings/my-profile", element:<MyProfile/>},
    //       //                       {path:"/settings/notfications",element:<Notfications/>},
    //       //                       {path:"/settings/visibility", element:<Visibility/>},
    //       //                       {path:"/settings/login-details", element:<LoginDetails/>}] },

    //       // { path: "profile", element: <ProfilePage /> },
    //       // { path: "easy-apply", element: <EasyApply /> },
    //     ],
    //   },
    // ],
  },

  { path: "*", element: <Navigate to={"/login"} /> },
]);

export function RouterApp() {
  return (
    <Suspense

    >
      <RouterProvider router={router} />
    </Suspense>
  );
}
