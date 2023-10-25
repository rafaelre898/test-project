import React from 'react';
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Tag,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addProduct } from '../../redux/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import ToastContainer from '../Toast/ToastCont';
import { toast } from 'react-toastify';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  brand: Yup.string().required('Brand is required'),
  category: Yup.string().required('Category is required'),
  features: Yup.array()
    .of(Yup.string())
    .required('At least one feature tag is required ')
    .min(1, 'At least one feature tag is required'),
});

const AddProductModal = ({ isOpen, onClose }) => {
  const status = useSelector((state) => state.data.addProductStatus);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      brand: '',
      category: '',
      features: [],
      tagInput: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addProduct(values))
        .then(() => {
          toast.success('Product added successfully!');
          formik.resetForm();
        })
        .catch((error) => {
          toast.error('Failed to add product!');
        });
    },
    validateOnBlur: true,
    validateOnChange: false,
  });

  const handleKeyDown = (event) => {
    if (['Enter', 'Tab', ','].includes(event.key)) {
      event.preventDefault();

      const val = formik.values.tagInput.trim();

      if (val && !formik.values.features.includes(val)) {
        formik.setFieldValue('features', [...formik.values.features, val]);
      }

      formik.setFieldValue('tagInput', '');
    }
  };

  const handleTagRemove = (tag) => {
    const newFeatures = formik.values.features.filter((t) => t !== tag);
    formik.setFieldValue('features', newFeatures);
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input name='name' onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name && <div style={{ color: 'red' }}>{formik.errors.name}</div>}
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input name='description' onChange={formik.handleChange} value={formik.values.description} />
                {formik.errors.description && <div style={{ color: 'red' }}>{formik.errors.description}</div>}
              </FormControl>

              <FormControl>
                <FormLabel>Brand</FormLabel>
                <Input name='brand' onChange={formik.handleChange} value={formik.values.brand} />
                {formik.errors.brand && <div style={{ color: 'red' }}>{formik.errors.brand}</div>}
              </FormControl>

              <FormControl>
                <FormLabel>Category</FormLabel>
                <Input name='category' onChange={formik.handleChange}  value={formik.values.category} />
                {formik.errors.category && <div style={{ color: 'red' }}>{formik.errors.category}</div>}
              </FormControl>

              <FormControl >
                <FormLabel>Features</FormLabel>
                <Box display='flex' alignItems='center' flexWrap='wrap'>
                  {formik.values.features.map((tag, index) => (
                    <Tag key={index} borderRadius='full' variant='solid' m='1' bgColor='teal.400'>
                      <TagLabel>{tag}</TagLabel>
                      <TagCloseButton onClick={() => handleTagRemove(tag)} />
                    </Tag>
                  ))}
                  <Input
                    name='tagInput'
                    placeholder='Add a tag...'
                    onKeyDown={handleKeyDown}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tagInput}
                  />
                </Box>
                <div style={{ color: 'red' }}>
                  {formik.errors.features && (Array.isArray(formik.errors.features) ? formik.errors.features.join(', ') : formik.errors.features)}
                </div>
              </FormControl>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} type='submit' disabled={status === 'loading'}>
                  Submit
                </Button>
                <Button variant='ghost' onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <ToastContainer />
    </Box>
  );
};

export default AddProductModal;
