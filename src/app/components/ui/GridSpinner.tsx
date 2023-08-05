import dynamic from "next/dynamic";

const GridSpinner = dynamic(() => import("react-spinners/GridLoader"), {
  ssr: false,
});

export default GridSpinner;
