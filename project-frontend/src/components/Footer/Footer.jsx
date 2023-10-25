import { Box, Heading } from '@chakra-ui/react'; 
import { css } from '@emotion/react';

const styles = {
  footerContainer: css`
    height: 50px;
    width: 100%;
    background-color: #c4c4c4;
    bottom: 0;
    margin-top:20px;
  `
};

function Footer() {
  return (
    <Box css={styles.footerContainer}>
      
    </Box>
  );
}

export default Footer;
