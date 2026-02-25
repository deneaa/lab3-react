import React from "react";
import useNavigation from "./Hooks/useNavigation";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Orders from "./Pages/Orders/Orders";
import Checkout from "./Pages/Checkout/Checkout";

const pages = ["Dashboard", "Orders", "Checkout"];

const App = () => {
  const { currentPage, navigate } = useNavigation(pages);

  const renderPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard goToPage={navigate} />;
      case "Orders":
        return <Orders goToPage={navigate} />;
      case "Checkout":
        return <Checkout onNavigate={navigate} />;
      default:
        return <Dashboard goToPage={navigate} />;
    }
  };

  return <div>{renderPage()}</div>;
};

export default App;
