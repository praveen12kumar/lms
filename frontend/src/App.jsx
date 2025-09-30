import "./App.css";

import {AppContextProvider} from "./context/AppContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./utils/Routes";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <AppRoutes />
        </AppContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
