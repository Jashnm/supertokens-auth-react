import React, {Fragment, useEffect, useState} from 'react';
import './App.css';

import AppWithoutRouter from './AppWithoutRouter';
import AppWithReactDomRouter from './AppWithReactDomRouter';
import Footer from "./Footer";
/* SuperTokens imports */
import SuperTokens from 'supertokens-auth-react';
import EmailPassword, {signOut} from 'supertokens-auth-react/recipe/emailpassword';
import ThirdParty from 'supertokens-auth-react/recipe/thirdparty';
import axios from "axios";


import Session from 'supertokens-auth-react/recipe/session';
import Button from "./Button";
import DarkTheme from "./Themes/Dark";
import HeliumTheme from "./Themes/Helium";
import HydrogenTheme from "./Themes/Hydrogen";

Session.addAxiosInterceptors(axios);


export function getApiDomain() {
  const apiPort = process.env.REACT_APP_API_PORT || 8082;
  const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3031;
  const websiteUrl = process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
  return websiteUrl;
}

/*
 * Use localStorage for tests configurations.
 */
if (getQueryParams('websiteBasePath')) {
  window.localStorage.setItem('websiteBasePath', getQueryParams('websiteBasePath'));
}
const websiteBasePath = window.localStorage.getItem('websiteBasePath') || undefined;


if (getQueryParams('useShadowDom')) {
  window.localStorage.setItem('useShadowDom', getQueryParams('useShadowDom') === "true");
}
const useShadowDom = window.localStorage.getItem('useShadowDom') !== "false";


if (getQueryParams('mode')) {
  window.localStorage.setItem('mode', getQueryParams('mode'));
}

const emailVerificationMode = window.localStorage.getItem('mode') || "OFF";


if (getQueryParams('authRecipe')) {
  window.localStorage.setItem('authRecipe', getQueryParams('authRecipe'));
}

const authRecipe = window.localStorage.getItem('authRecipe') || "emailpassword";

if (getQueryParams('defaultToSignUp')) {
  window.localStorage.setItem('defaultToSignUp', getQueryParams('defaultToSignUp') === "true");
}

if (getQueryParams('useReactRouterDom')) {
  window.localStorage.setItem('useReactRouterDom', getQueryParams('useReactRouterDom') === "true");
}
const useReactRouterDom = window.localStorage.getItem('useReactRouterDom') !== "false";


const defaultToSignUp = window.localStorage.getItem('defaultToSignUp') !== "false";


const theme = getTheme();


function getTheme() {

  let theme = {
    colors: {},
    style: {}
  };

  const themeParams = getQueryParams('theme');

  if (themeParams === "dark") {
    window.document.body.style.backgroundColor = "#1a1a1a"
    return DarkTheme;
  }

  if (themeParams === "helium") {
    return HeliumTheme;
  }

  if (themeParams === "hydrogen") {
    return HydrogenTheme;
  }

  return theme;
}

let recipeList = [Session.init()];
if (authRecipe === "thirdparty") {
  recipeList = [
    getThirdPartyConfigs(),
    ...recipeList
  ]
} else {
  recipeList = [
    getEmailPasswordConfigs(),
    ...recipeList
  ]
}

SuperTokens.init({
  appInfo: {
    appName: "SuperTokens",
    websiteDomain: getWebsiteDomain(),
    apiDomain: getApiDomain(),
    websiteBasePath
  },
  useReactRouterDom,
  recipeList
});

/* App */
function App() {
  const router = getQueryParams('router');
  if (router === 'no-router') {
    return <AppWithoutRouter />
  }
  
  return <AppWithReactDomRouter/>
}


function getQueryParams(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

export default App;

export function BaseComponent ({children}) {
  return (
       <Fragment>
       <div className="fill">
          {children}
       </div>
        <Footer/>
      </Fragment>
  )
}


export function Home () {
  return (<>
    <h2>/Home</h2>
    <Button onClick={() => window.location.href = websiteBasePath || "/auth"} label="LOGIN"/>
  </>);
}

export function About () {
  return (
      <h2>/About</h2>

    )
}

export function Contact () {
  return (
      <h2>/Contact</h2>

    )
}

export function Dashboard () {

  const [sessionInfoUsingAxios, setSessionInfoUsingAxios] = useState(undefined);
  const [sessionInfoUsingFetch, setSessionInfoUsingFetch] = useState(undefined);

  async function logout() {
    await signOut();
    window.location.href = "/auth";
  }

  async function fetchSessionInfoUsingAxios() {
    return (await axios.get(`${getApiDomain()}/sessionInfo`)).data;
  }

  async function fetchSessionInfoUsingFetch() {
    const res = await fetch(`${getApiDomain()}/sessionInfo`);
    return await res.json();
  }

  useEffect(() => {
    async function fetchData() {
      const sessionInfoUsingAxios = await fetchSessionInfoUsingAxios();
      setSessionInfoUsingAxios(sessionInfoUsingAxios);
      const sessionInfoUsingFetch = await fetchSessionInfoUsingFetch();
      setSessionInfoUsingFetch(sessionInfoUsingFetch);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <Button onClick={logout} label="LOGOUT" className="logoutButton" />
      <div className="axios">
          <SessionInfoTable sessionInfo={sessionInfoUsingAxios} />
      </div>
      <div className="fetch">
        <SessionInfoTable sessionInfo={sessionInfoUsingFetch} />
      </div>
    </div>
    )
}

function SessionInfoTable({sessionInfo}) {

  if (sessionInfo === undefined) {
    return <div className="sessionInfo" />
  }
  return (
    <ul>
        <li className="sessionInfo-user-id" >{sessionInfo['userId']}</li>
        <li className="sessionInfo-session-handle" >{sessionInfo['sessionHandle']}</li>
    </ul>
  )
}

function getEmailPasswordConfigs () {
  return EmailPassword.init({
    preAPIHook: async (context) => {
      console.log(`ST_LOGS PRE_API_HOOKS ${context.action}`);
      return context.requestInit;
    },
    getRedirectionURL: async (context) => {
      console.log(`ST_LOGS GET_REDIRECTION_URL ${context.action}`);
      if (context.action === "SUCCESS") {
        return context.redirectToPath || "/dashboard";
      }
    },
    onHandleEvent: async (context) => {
      console.log(`ST_LOGS ON_HANDLE_EVENT ${context.action}`);
    },
    useShadowDom,
    emailVerificationFeature: {
      sendVerifyEmailScreen: {
        style: theme.style
      },
      verifyEmailLinkClickedScreen: {
        style: theme.style
      },
      mode: emailVerificationMode
    },
    resetPasswordUsingTokenFeature: {
      enterEmailForm: {
        style: theme.style
      },
      submitNewPasswordForm: {
        style: theme.style
      }
    }, 
    signInAndUpFeature: {
      defaultToSignUp,
      signInForm: {
        style: theme.style
      },
      signUpForm: {
        style: theme.style,
        privacyPolicyLink: "https://supertokens.io/legal/privacy-policy",
        termsOfServiceLink: "https://supertokens.io/legal/terms-and-conditions",
        formFields: [{
              id: "email",
              label: "Your Email",
              placeholder: "Your work email"
          },{
              id: "name",
              label: "Full name",
              placeholder: "First name and last name",
          },{
              id: "age",
              label: "Your age",
              placeholder: "How old are you?",
              validate: async (value) => {
                if (parseInt(value) > 18) {
                    return undefined;
                }

                return "You must be over 18 to register";;
              }
            }, {
              id: "country",
              label: "Your Country",
              placeholder: "Where do you live?",
              optional: true
          }]
        }
    }
  })
}

function getThirdPartyConfigs () {
  return ThirdParty.init({
    useShadowDom,
    emailVerificationFeature: {
      mode: emailVerificationMode
    },
    signInAndUpFeature: {
      privacyPolicyLink: "https://supertokens.io/legal/privacy-policy",
      termsOfServiceLink: "https://supertokens.io/legal/terms-and-conditions",
      providers: [
        ThirdParty.Github.init(),
        ThirdParty.Google.init(),
        ThirdParty.Facebook.init(),
        ThirdParty.Twitter.init(),
        ThirdParty.Apple.init(),
        ThirdParty.Custom.init({
          id: "custom",
          name: "Custom"
        })
      ]
    }
  })
}