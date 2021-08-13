import Auth from '@aws-amplify/auth';

Auth.configure({
  identityPoolId: process.env.authIdentityPoolId,
  mandatorySignIn: process.env.authMandatorySignIn === 'true',
  region: process.env.authRegion,
  userPoolId: process.env.authUserPoolId,
  userPoolWebClientId: process.env.authUserPoolWebClientId,
});

export default Auth;
