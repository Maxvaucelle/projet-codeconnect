import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './_friendlist.scss';

function FriendList() {
  const params = useParams();
  const idParam = params.idUser;
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    console.log(idParam);
    axios.get(`http://localhost:3001/friends/${idParam}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [idParam]);
  if (!data) return 'bruh';

  return (
    <div className="">

       <div className="friendPage-box">
        <h1>Amis</h1>
        <div className="friendPage-content">

      <p className="">{data[0].IMG}</p>
      <p className="">{data[0].NAME}</p>
      <p className="">{data[0].FIRSTNAME}</p>
      <p className="">{data[0].OPEN_WORK}</p>
      <p className="">{data[1].IMG}</p>
      <p className="">{data[1].NAME}</p>
      <p className="">{data[1].FIRSTNAME}</p>
      <p className="">{data[1].OPEN_WORK}</p>
      <p className="">{data[2].IMG}</p>
      <p className="">{data[2].NAME}</p>
      <p className="">{data[2].FIRSTNAME}</p>
      <p className="">{data[2].OPEN_WORK}</p>
      <p className="">{data[3].IMG}</p>
      <p className="">{data[3].NAME}</p>
      <p className="">{data[3].FIRSTNAME}</p>
      <p className="">{data[3].OPEN_WORK}</p>
        </div>

    </div>
    </div>
  );
}

export default FriendList;