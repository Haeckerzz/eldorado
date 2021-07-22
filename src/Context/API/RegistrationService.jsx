import axios from 'axios';
export const UserRegisterService = (data) =>{
    axios.post('http://localhost:8082/admin/product',data)
    .then(response => this.setState({ articleId: response.data.id }));
}