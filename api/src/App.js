import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect}from 'react';

function App() {

  const [endPoint, setEndPoint] = useState('');

  const [container, setContainer] = useState([]);

  const [finalPoint, setFinalPoint] = useState('');

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd36eff2fbbmsh037c12ac642267ep18e180jsn8a36d53ab96c',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };

  useEffect(()=>{
      fetchApi();
  // }, [endPoint])
}, [finalPoint])

  const fetchApi = () => {

  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, options)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setContainer(data.d)
      })
      .catch(err => {
          console.error(err)
      });
  }

  const onChangeHandler = (e) => {
    setEndPoint(e.target.value)
  }
  
  const submitHandler = (e) => {
      e.preventDefault();
      setFinalPoint(endPoint);
  }

  return (
    <div className="App">

      <form onSubmit={submitHandler}>

        <input type="text" value={endPoint} onChange={onChangeHandler}/>
        <button type='submit'>submit</button>

      </form>

        <div className="element" >
            {container.map((items) => {
                return (
                    <div className="element-div">
                        <img src={items.i.imageUrl} alt="" />
                        <p>{items.l}</p>
                        <p>{items.s}</p>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default App;
