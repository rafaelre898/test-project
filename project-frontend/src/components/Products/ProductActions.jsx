import { Box, Button, Text } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import AddProductModal from './AddProductModal';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteProduct, fetchData, getSites } from '../../redux/dataSlice';
import { useEffect } from 'react';
import { css } from '@emotion/react';

const styles = {
  mainContainer: css`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-left: 8px;
  `,
  actionContainer: css`
    display: flex;
    flex-direction: column;
    height: max-content;
    align-items: space-between;
    justify-content: center;
    width: 60%;
    border: 2px solid;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.3);
  `,
  button: css`
    background: #DD1E1D;
    margin-top: 10px;
    width: 120px;
    margin-left: 8px;
    font-size: 14px;
  `,
  deleteButton: css`
    margin-bottom: 10px;
  `,
  siteText: css`
    text-align: center;
  `
};

function ProductActions({ deleteId }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const sites = useSelector((state) => state.data.sitesStatus);

  const deleteProducts = () => {
    if (deleteId !== '') {
      dispatch(deleteProduct(deleteId))
        .then(() => {
          toast.success('Product delete successfully!');
          dispatch(fetchData());
        })
        .catch(() => {
          toast.error('Failed to delete product!');
        });
    }
  };

  useEffect(() => {
    dispatch(getSites());
  }, [dispatch]);

  return (
    <Box css={styles.mainContainer}>
      <Box css={styles.actionContainer}>
        <Box>
          <Button onClick={onOpen} css={styles.button}>
            Add Product
          </Button>
          <Button
            css={[styles.button, styles.deleteButton]}
            onClick={() => deleteProducts()}
          >
            Delete Product
          </Button>
        </Box>
        <Text css={styles.siteText}>
          {sites.companyName}
        </Text>
      </Box>
      <AddProductModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default ProductActions;
