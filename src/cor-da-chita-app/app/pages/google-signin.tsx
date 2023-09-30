// "use client";
// import React, { useEffect } from "react";
// import { useSession, signIn } from "next-auth/react";
// EM TESTES
// // Login with Google
// export default function SignInPage() {
//   const { data: session, status } = useSession();

//   useEffect(() => {
//     if (!(status === "loading") && !session) void signIn("google");
//     if (session) window.close();
//   }, [session, status]);

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         position: "absolute",
//         left: 0,
//         top: 0,
//         background: "white",
//       }}
//     ></div>
//   );
// }
