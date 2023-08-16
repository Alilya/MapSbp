import React, {useState, useEffect} from 'react';

let App = ()=> {
  const [merchants, setMerchants] = useState(false);
  useEffect(() => {
    getMerchant();
  }, []);

  const instance = axios.create({
    withCredentials: true,
    baseURL: 'localhost:8081'
    
  });


  // function createMerchant() {
  //   let name = prompt('Enter merchant name');
  //   let email = prompt('Enter merchant email');
  //   fetch('http://localhost:3001/merchants', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({name, email}),
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //       getMerchant();
  //     });
  // }
  // function deleteMerchant() {
  //   let id = prompt('Enter merchant id');
  //   fetch(`http://localhost:3001/merchants/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //       getMerchant();
  //     });
  // }
  return (
    <div>
      {merchants ? merchants : 'There is no merchant data available'}
      <br>
      <button onclick={getMerchant}>get merchant</button>
      </br>
      //<button onclick={deleteMerchant}>Delete merchant</button>
    </div>
  );
}

export default App;