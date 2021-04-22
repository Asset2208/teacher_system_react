import axios from 'axios';

const CARD_API_BASE_URL = "http://localhost:8080/api/cards";
const TASK_API_BASE_URL = "http://localhost:8080/api/tasks";

class CardTaskService{
    getCardTasks(cardId){
        return axios.get(CARD_API_BASE_URL + '/' + cardId + '/tasks');
    }

    createCardTask(task, cardId){
        return axios.post(CARD_API_BASE_URL + '/' + cardId + '/tasks', task);
    }

    getCardTaskById(taskId){
        return axios.get(TASK_API_BASE_URL + '/' + taskId);
    }

    updateCardTask(task, taskId){
        return axios.put(TASK_API_BASE_URL + '/' + taskId, task);
    }

    deleteCardTask(cardId){
        return axios.delete(CARD_API_BASE_URL + '/' + cardId);
    }
}

export default new CardTaskService();