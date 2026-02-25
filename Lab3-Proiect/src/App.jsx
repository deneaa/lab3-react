import React from "react";
import useNavigation from "./Hooks/useNavigation";
import Dashboard from "./Pages/Dashboard/Dashboard";

const pages = ["Dashboard", "Orders", "Tracking", "Cart"];

const App = () => {
  const { currentPage, navigate } = useNavigation(pages);
  let page;
  switch (currentPage) {
    case "Dashboard":
      page = <Dashboard />;
  }
  return <div>{page}</div>;
};

export default App;
