import localFont from 'next/font/local'
 
// define 2 weights of aileron
const aileron = localFont({
    src: [
      {
        path: "../../../public/fonts/Aileron-Regular.otf",
        weight: "400",
        style: "normal",
      },
      {
        path: "../../../public/fonts/Aileron-Bold.otf",
        weight: "700",
        style: "bold",
      },
    ],
  });
  
export { aileron }