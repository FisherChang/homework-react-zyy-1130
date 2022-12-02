import axios from "axios";

const URL='http://localhost:3001/agents';

const fetchAgents=()=>
    axios.get(URL).then((response)=>response.data);

export {fetchAgents};
