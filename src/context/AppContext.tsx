import React, { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from "../utils/theme";

interface Props {
  htmlFontSize?: number;
  children: JSX.Element;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const AppContext = ({ children }: Props) => {
  const defaultTheme = useMemo(() => getTheme(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <div>
          {children}
          <ReactQueryDevtools initialIsOpen />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default AppContext;
