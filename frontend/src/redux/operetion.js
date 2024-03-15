import axios from 'axios';

const getMedicines = async () => {
  try {
    const response = await axios.get('/');
    return response.data;
  } catch (error) {}
};

export default getMedicines;
