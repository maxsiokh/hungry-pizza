import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={465}
    viewBox='0 0 280 465'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='145' cy='139' r='125' />
    <rect x='40' y='270' rx='16' ry='16' width='210' height='26' />
    <rect x='13' y='310' rx='11' ry='11' width='125' height='32' />
    <rect x='141' y='306' rx='30' ry='30' width='138' height='41' />
  </ContentLoader>
);
export default PizzaSkeleton;
