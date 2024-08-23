import React from "react"
import { Box, Typography } from "@mui/material"

import { PillProps } from "./types"
import { styles } from "./styles";

const Pill = ({ label }: PillProps) => (
  <Box className='pill' sx={styles.pill}>
    <Typography sx={styles.label} className="pill-label" variant="body1">
      {label}
    </Typography>
  </Box>
);

export default Pill;