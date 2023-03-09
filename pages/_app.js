import "../styles/globals.css";
import Header from "../components/Header";
import store from "../reduxToolkit/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, CircularProgress } from "@mui/material";
import NProgress from "nprogress";

// function PageLoader() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);
//     const handleComplete = (url) =>
//       url === router.asPath &&  setLoading(false);

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);

//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   });

//   return (
//     loading && (
//       <>
//         <Box
//           sx={{ display: "flex" }}
//           style={{
//             width: "100vw",
//             height: "100vh",
//             position: "absolute",
//             margin: "auto",
//             zIndex:"999"
//           }}
//         >
//           <CircularProgress />
//         </Box>
//       </>
//     )
//   );
// }

// function Loading() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);
//     const handleComplete = (url) =>
//       url === router.asPath &&
//       setTimeout(() => {
//         setLoading(false);
//       }, 5000);

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);

//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   });

//   return (
//     loading && (
//       <div className="w-screen h-screen absolute m-auto z-50">
//         <Box
//           sx={{ display: "flex" , alignItems:"center", justifyContent:"center"}}
//         >
//           <CircularProgress />
//         </Box>
//       </div>
//     )
//   );
// }

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 5000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  });

  if (loading) {
    return (
      <div className="w-screen h-screen absolute m-auto z-50">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height:"100%"
          }}
        >
          <CircularProgress />
        </Box>
      </div>
    );
  }

  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
