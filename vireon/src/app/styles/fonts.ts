import localFont from 'next/font/local'
 
// define 2 weights of aileron
const aileron = localFont({
    src: [
      {
        path: "./Aileron-Regular.otf",
        weight: "400",
        style: "normal",
      },
      {
        path: "./Aileron-Bold.otf",
        weight: "700",
        style: "bold",
      },
    ],
  });
  
export { aileron }