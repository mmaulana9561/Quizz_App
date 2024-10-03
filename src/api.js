import axios from 'axios';

export const fetchQuestions = async () => {
  try {
    const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
    if (response.data && response.data.results.length > 0) {
      return response.data.results; 
        } else {
      throw new Error('No questions found');
    }
  } catch (error) {
    console.error('Error fetching questions:', error.message);
    return []; 
  }
};
