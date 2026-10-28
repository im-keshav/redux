import axios from 'axios'

export const fetchUser = async ()=>{
   const res =  await axios.get('https://localhost:3000/api/users')
    return res.data


}
