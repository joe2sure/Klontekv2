import ReactGA from 'react-ga4';

const TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};