import React, { useState } from "react";

import { Box } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { QuoteListProps } from "./types";
import Quote from "./Quote";
import { styles } from "./styles";

const QuoteList = ({
  quotes
}: QuoteListProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectPrevIndex = () => {
    const newIndex = selectedIndex === 0 ? quotes.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
  };

  const selectNextIndex = () => {
    const newIndex = selectedIndex === quotes.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
  };

  return (
    <Box id='quotes-list-container' sx={styles.quotesListContainer}>
      {quotes.map((quote, index) => {
        return (
          <Box
            className={`${selectedIndex === index ? 'visible-quote' : 'invisible-quote'}`}
            sx={styles.selectedQuote}
          >
            <Quote {...quote} />
          </Box>
        );
      })}
      {quotes.length >1 && (<Box sx={styles.buttonsContainer}>
        <Box onClick={selectPrevIndex}>
          <ArrowBackIcon />
        </Box>
        <Box onClick={selectNextIndex}>
          <ArrowForwardIcon />
        </Box>
      </Box>)}
    </Box>
  );
}

export default QuoteList;