import React from 'react';
import {Helmet} from "react-helmet";

import TopBlock from 'TopBlock';
import ManagmentsList from 'ManagmentsList';


const PageManagments = () => {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>Руководящий состав федерации плавания Московской области</title>
      </Helmet>
      <TopBlock 
        title='Руководящий состав'
        textAlignTitle='left'
      />
      <ManagmentsList/>
    </React.Fragment>
  )
}

export default PageManagments;