import { Box, Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';

const customStyle = {
  box: css`
    height: 50px;
    width: 100%;
    background-color: #c4c4c4;
    position: fixed;
    top: 0;
  `,
  heading: css`
    font-size: 1.875rem; 
    padding-left: 20px;
    padding-top: 5px;
    text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.3);
  `,
};

function Header() {

  return (
    <Box css={customStyle.box}>
      <Heading
        css={customStyle.heading}
      >
        WILE E. CO.
      </Heading>
    </Box>
  );
}

export default Header;
