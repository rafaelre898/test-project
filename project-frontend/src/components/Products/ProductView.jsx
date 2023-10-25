import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

const styles = {
  mainContainer: css`
    display: flex;
    width: 70%;
    border: 2px solid;
    margin-top: 10px;
    margin-left: 10px;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.3);
  `,
  imageContainer: css`
    width: 30%;
    display: flex;
    justify-content: center;
    align-self: center;
  `,
  imgStyles: css`
    width: 100px;
    box-shadow: 0 0 0.75rem #bcbcbc;
    height: 80px;
  `,
  contentContainer: css`
    width: 70%;
    margin-top: 10px;
  `,
  brandsAndCategory: css`
    display: flex;
  `,
  brandsCategoryBox: css`
    width: 50%;
  `,
  headingStyles: css`
    font-size: 14px;
    padding-top: 5px;
    text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.3);
  `,
  descriptionBox: css`
    margin-top: 13px;
  `,
  featureHeading: css`
    font-size: 16px;
    padding-top: 5px;
  `,
  featureDot: css`
    font-weight: bold;
    font-size: 3xl;
    padding-right: 4px;
  `
};

function ProductView({ setDeleteId, viewProductId }) {
  const product = useSelector((state) =>
  {
    return viewProductId !==0 
    ? (state.data?.items && state.data?.items.find((item) => item.id === viewProductId)) || {}
    : (state.data?.items[0] && state.data?.items[0]) || {}
  }
    
  );
  setDeleteId(product.id);
  return  (
    <Box css={styles.mainContainer}>
      <Box css={styles.imageContainer}>
        <Image
          src='https://www.w3schools.com/css/rock600x400.jpg'
          alt='Description of the Image'
          css={styles.imgStyles}
          fallbackSrc='https://example.com/fallback-image.jpg'
        />
      </Box>
      <Box css={styles.contentContainer}>
        <Box css={styles.brandsAndCategory}>
          <Box css={styles.brandsCategoryBox}>
            <Heading as='h6' size='sm' css={styles.headingStyles}>
              BRANDS
            </Heading>
            <Text>{product?.brand || ''}</Text>
          </Box>
          <Box css={styles.brandsCategoryBox}>
            <Heading as='h6' size='sm' css={styles.headingStyles}>
              CATEGORY
            </Heading>
            <Text>{product?.category || ''}</Text>
          </Box>
        </Box>
        <Box css={styles.descriptionBox}>
          <Heading as='h6' css={styles.headingStyles}>
            DESCRIPTION
          </Heading>
          <Text>{product?.description || ''}</Text>
        </Box>
        <Box css={styles.descriptionBox}>
          <Text as='h6' css={styles.featureHeading}>FEATURE</Text>
          {Array.isArray(product.features) &&
            product.features.map((item) => {
              return (
                <Text>
                  <Text as='span' css={styles.featureDot}>
                    .
                  </Text>
                  {item}
                </Text>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}

export default ProductView;
