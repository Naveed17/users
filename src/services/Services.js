import axios from 'axios'
// export api funcations constant
export const userServices = {
    users,
   };
   
   const Prefix = "https://jsonplaceholder.typicode.com"
   async function users(endpoint) {
     const { data: response } = await axios.get(
       `${Prefix}${endpoint}`);
     return response;
   }

   

  

  