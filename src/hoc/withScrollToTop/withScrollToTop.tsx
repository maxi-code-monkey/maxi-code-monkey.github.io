import React, { useRef } from "react";
import { Box } from "@mui/material";

import useIsVisible from "../../hooks/useIsVisible";
import ScrollToTop from "../../components/ScrollToTop";

import { WithScrollToTopIncomingProps } from "./types";

export const WithScrollToTop = ({
  children,
  selector
}: WithScrollToTopIncomingProps) => {

  const targetElement = useRef<HTMLDivElement>(null);
  const isTargetVisible = useIsVisible(targetElement);

  return (
    <>
      <Box component={'div'} ref={targetElement}>
        {children}
      </Box>
      <ScrollToTop isVisible={isTargetVisible} selector={selector} />
    </>
  );
};