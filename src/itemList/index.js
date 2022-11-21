import {useEffect, useState} from 'react'
import List from './List'
import GetList from './api/listapi';

const ListPage = () => {

  const [data, setData] = useState([]);
    useEffect( ()=>{
    async function fetchMyAPI() {
      await GetList().then(response => setData(response.list));
    }
    fetchMyAPI();
  },[data])

  return (
  <List data={data}/> 
 )
}

export default ListPage