import { Box, Heading } from '@chakra-ui/react';
import ProductInfo from './ProductInfo';
import { useState } from 'react';
import ProductView from './ProductView';
import ProductActions from './ProductActions';
import { css } from '@emotion/react';

const styles = {
  headerBox: css`
    width: 100%;
    background-color: #ffff;
    padding-top: 100px;
  `,
  heading: css`
    font-size: 14px; 
    padding-left: 20px;
  `,
  productContainer: css`
    display: flex;
  `
};

function ProductDetails() {
  const [deleteId,setDeleteId] = useState('');
  const [viewProductId,setViewProductId] = useState(0);
  return (
    <Box>
    <Box css={styles.headerBox}>
      <Heading as='h6' css={styles.heading}>
        WILE E. CO.
      </Heading>

      <Box css={styles.productContainer}>
        <ProductView setDeleteId={setDeleteId} viewProductId={viewProductId}/>
        <ProductActions deleteId={deleteId}/>
      </Box>
    </Box>

    <Box>
      <ProductInfo setViewProductId={setViewProductId} />
    </Box>
  </Box>
  );
}

export default ProductDetails;
