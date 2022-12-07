import axios from "axios";

const URL='http://localhost:3001/agents';

const fetchAgents=()=>
    axios.get(URL).then((response)=>response.data);

const updateResource=(id,newResources)=>
    axios
        .patch(`${URL}/${id}`,{resources:newResources})
        .then((response)=>response.data);

export { fetchAgents, updateResource };
