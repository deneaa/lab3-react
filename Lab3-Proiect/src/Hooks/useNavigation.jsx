import React, { useState } from "react";

const useNavigation = (pages) => {
  const [currentPage, setCurrentPage] = useState(pages[0]);

  const navigate = (page) => setCurrentPage(page);
  return { currentPage, navigate };
};

export default useNavigation;
