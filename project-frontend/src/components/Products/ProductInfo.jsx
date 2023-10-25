import { Box, Heading } from '@chakra-ui/react'; // Import the Heading component here
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/dataSlice';
import TableComponent from '../TableComponent/TableComponent';
import { css } from '@emotion/react';

const customStyle = {
  wrapper: css`
    width: 88%;
    border: 2px solid;
    margin-top: 10px;
    min-height: 15vh;
    margin-left: 10px;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.3);
  `,
  flexBox: css`
    display: flex;
    word-wrap: break-word;
    overflow: hidden;
    width: 100%;
  `,
  box40: css`
    width: 40%;
    padding-left: 10px;
  `,
  heading: css`
    padding-top: 8px;
  `,
  box20: css`
    width: 20%;
    padding-top: 5px;
  `
};

function ProductInfo({setViewProductId}) {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.data.items);
  const status = useSelector((state) => state.data.fetchStatus);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Box css={customStyle.wrapper}>
      <Box css={customStyle.flexBox}>
        <Box css={customStyle.box40}>
          <Heading  as='h6' css={customStyle.heading} size='sm'>
            PRODUCT INFORMATION
          </Heading>
        </Box>
        <Box css={customStyle.box20}>
          Resources
        </Box>
        <Box css={customStyle.box40}>
          Other
        </Box>
      </Box>
      <br />
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error loading data</div>}
      {status === 'succeeded' && <TableComponent products={products} setViewProductId={setViewProductId}/>}
    </Box>
  );
}

export default ProductInfo;
