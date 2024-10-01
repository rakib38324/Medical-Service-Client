// /emailverification/page.tsx
// import dynamic from "next/dynamic";

import EmailVerification from "./EmailVerification";

// // Dynamically load the component to avoid prerendering issues
// const EmailVerification = dynamic(() => import('./EmailVerification'), {
//   ssr: false, // Ensure this component is only rendered on the client
// });

export default function EmailVerificationPage() {
  return <EmailVerification />;
}
