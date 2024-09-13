import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignUpPage from "../pages/auth/signup";
import LoginPage from "../pages/auth/login";
import ProtectedRoutes from "./protectRouter";
import { Suspense } from "react";
import MainLayout from "../layouts";
import PortfolioList from "../pages/portfolio";
import PubcliView from "../pages/portfolio/PublicView";
import Dashboard from "../pages/Dashboard";
import CreatePortfolio from "../pages/Dashboard/CreatePortfolio";
import { ResetsPassword } from "../pages/auth/resetPassword";
import { ForgotPassword } from "../pages/auth/forgetPassword";
import Pricing from "../pages/pricing";
import Contact from "../pages/contact";
import About from "../pages/about";
import Home from "../pages/home";
import AuthGoogleRedirect from "../pages/auth/redirect";
import DashboardIndex from "../pages/Dashboard/dahsboard";
import CertifactePage from "../pages/certificates";




const router = createBrowserRouter([
  {
    
    
    
         path: "/",
           element: <MainLayout />,
          children: [
            {
              
              path: '/',
                element: <Home />
                },

             {
              
           path: '/portfolios',
             element: <PortfolioList />
             },
             {path:"/redirect", element:<AuthGoogleRedirect/>},
            {path:"/portfolios/:id",
              element: <PubcliView/>
            },
            { path: "/about", element: <About /> },
            { path: "/pricing", element: <Pricing /> },
            { path: "/contact", element: <Contact /> },
            { path: "/certificates", element: <CertifactePage /> },
            ],

   


  },

  {
    element: <ProtectedRoutes />,
    children: [
     {
        path: "/dashboard",
       element: <MainLayout />,
       children: [
        {
          path:"/dashboard",
          element:<Dashboard/>,
          children:[
            {path:"",
              element:<DashboardIndex/>,},
            {
              path: 'create-portfolios',
              element: <CreatePortfolio />
            },
          ]
        },
       
       //  {
       //   path: '/settings',
       //    element: <Settings />
       //  },
       ]
     }]
    },
    
  
  { path: "sign-up", element: <SignUpPage /> },
  { path: "reset-password", element: <ResetsPassword /> },
  { path: "forgot-password", element: <ForgotPassword /> },
  { path: "login", element: <LoginPage /> },

  // {
  //   path: "/register/verify",
  //   element: (<VerifyPage />),
  // },

  {
   

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
