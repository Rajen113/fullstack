import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignupForm from './components/form/SignupForm.jsx';
import LoginPage from './components/form/LoginPage.jsx';
import Layout from './components/Layout/Layout.jsx';
import AboutPage from './components/About/AboutPage.jsx';
import HomePage from './components/home/HomePage.jsx';
import BuyPage from './components/buyProduct/Buypage.jsx';
import ContactPage from './components/ContactPage/ContactPage.jsx';
import PrivacyPage from './components/privacy/PrivacyPage.jsx';
import TermsPage from './components/Term/TermsPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout><HomePage/></Layout>
  },
  {
    path: "about",
    element:<Layout><AboutPage/></Layout>,
  },
  {
    path: "login",
    element:<Layout><LoginPage/></Layout>,
  },
  {
    path: "signup",
    element:<Layout><SignupForm/></Layout>,
  },
  {
    path: "buy",
    element:<Layout><BuyPage/></Layout>,
  },
  {
    path: "contact",
    element:<Layout><ContactPage/></Layout>,
  },
  {
    path: "terms",
    element:<Layout><TermsPage/></Layout>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
