import { ViewIcon } from '@chakra-ui/icons';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

function TableComponent({ products,setViewProductId }) {
  const ViewProduct = (id) => {
    setViewProductId && setViewProductId(id)
  };
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr fontSize={'10px'}>
            <Th>Brand</Th>
            <Th>Category</Th>
            <Th>Descrption</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((item) => (
            <Tr fontSize={'10px'}>
              <Td>{item.brand}</Td>
              <Td>{item.category}</Td>
              <Td>{item.description}</Td>
              <Td>
                <ViewIcon w={6} h={6} color='pink.500' _hover={{ color: 'pink.100' }} onClick={() => ViewProduct(item.id)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
