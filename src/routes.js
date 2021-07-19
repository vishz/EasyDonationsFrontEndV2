import MainPanel from './views/landing';
import LoginPage from './views/login';
import SignUpPage from './views/sign-up';
import ContactUsPage from './views/contact-us';
import DonationRequirments from './views/donation-requirments';
import * as config from "./const/config";

const routes = [
    {
        path:"",
        render: MainPanel,
        layout: config.BASE_ROUTE
    },
    {
        path:"donation-requirements",
        render: DonationRequirments,
        layout: config.BASE_ROUTE
    },
    {
        path:"contact-us",
        render: ContactUsPage,
        layout: config.BASE_ROUTE
    },
    {
        path:"login",
        render: LoginPage,
        layout: config.BASE_ROUTE
    },
    {
        path:"sign-up",
        render: SignUpPage,
        layout: config.BASE_ROUTE
    }
];

export default routes;
