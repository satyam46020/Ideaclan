import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, deleteUser, fetchAdminDashboardData, updateUser } from '../Redux/AdminDashboard/action'; // Import updateUser action
import { Box, Button, Flex, Img, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalStudents, totalCourses, students, error } = useSelector(state => state.adminDashboardReducer);
  const [showTable, setShowTable] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [editUser, setEditUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const token = useSelector(state => state.loginReducer.token);

  useEffect(() => {
    dispatch(fetchAdminDashboardData(token, currentPage, perPage));
  }, [dispatch, showTable, currentPage, perPage, token]);

  const handleStudentsClick = () => {
    setShowTable(true);
  };

  const handleCoursesClick = () => {
    setShowTable(false);
  };

  const handleLogoutClick = () => {
    navigate('/')
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEditUser = (user) => {
    setEditUser(user);
    setIsEditModalOpen(true);
  };
  
  const handleUpdateUser = () => {
    if (editUser) {
        console.log("inside edit user")
      const updatedUserData = { ...editUser }; 
      updatedUserData.username = editUser.username; 
      updatedUserData.email = editUser.email; 
  
      dispatch(updateUser( updatedUserData, token));
      setEditUser(null); 
      setIsEditModalOpen(false); 
    }
  };
  
  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId, token));
  };

  return (
    <Box p="8" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Text textAlign="center" fontSize="5xl" fontWeight="bold" mb="4">Admin Dashboard</Text>
      <Button onClick={handleLogoutClick} mx="auto" mt="4" colorScheme='red' color={"white"}>Logout</Button>
      <Flex justifyContent="space-around">
        <Box onClick={handleStudentsClick}>
          <Img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRe2G9k5LKYBdi6-WL0USUxlZnSKBckjnig&usqp=CAU"} alt="Students" />
          <Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }} textAlign="center">Total Students</Text>
          <Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }} textAlign="center">{totalStudents}</Text>
        </Box>
        <Box onClick={handleCoursesClick}>
          <Img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTEaGiN9xAzn6u2TrU64D8jEIkrn67MBx2A&usqp=CAU"} alt="Courses" />
          <Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }} textAlign="center">Total Courses</Text>
          <Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }} textAlign="center">{totalCourses}</Text>
        </Box>
      </Flex>
      {showTable && (
        <Box mt="4">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map(student => (
                <Tr key={student._id}>
                  <Td>{student.username}</Td>
                  <Td>{student.email}</Td>
                  <Td>
                    <Button onClick={() => handleEditUser(student)} color={'white'} colorScheme='blue'>Edit</Button>
                  </Td>
                  <Td>
                    <Button onClick={() => handleDeleteUser(student._id)} color={'white'} colorScheme='red'>Delete</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{editUser && 'Edit User'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder='username' value={editUser?.username} onChange={(e) => setEditUser({ ...editUser, username: e.target.value })} />
            <Input placeholder='email' value={editUser?.email} onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdateUser}>{editUser ? 'Update' : 'Add'}</Button>
            <Button onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdminDashboard;
