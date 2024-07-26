// components/PageContainer.js
import React from 'react';

const PageContainer = ({ children }) => {
	return <div className='container mx-auto md:p-20 p-10'>{children}</div>;
};

export default PageContainer;
