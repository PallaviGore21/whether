import React, { useEffect, useState } from 'react'
import './../index.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
    const [city, setCity] = useState('pune')
    const [search, setSearch] = useState('Aurangabad')
    let Api_key = "8a99e00502bb223ad0333582da29217c"
    useEffect(() => {
      
    }, [search])
    

    const fetchApi = async ()=>{
      
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${Api_key}`
        const response =await fetch(url)
        const resJson = await response.json()
        console.log(resJson);
        setCity(resJson.main)

     }
     
  return<>
   {/* {JSON.stringify(city)} */}
   {JSON.stringify(search)}
{/* <iframe src="https://www.google.com/maps/@19.8729794,75.3273835,19.04z" frameborder="0"></iframe> */}
   <div className='col-sm-12'>
    <div className='wetherBg'>
      <h1 className='heading'>Whether App</h1>
      <div className='d-grid gap-3 col-4 mt-4'>
      <input 
  className='form-control'
  value={search}
  onChange={e=>{setSearch(e.target.value)}}
  type="text"  />
      <button type='button' className='btn btn-info' onClick={fetchApi}>Submit</button>
      </div>
  </div>
  </div>

  <Card >
<div className='container col-md-12 text-center mt-5'>
      <CardContent>
     
    <img src='https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png' height={80} width={80} />
        <Typography sx={{ fontSize: 15 }}  gutterBottom>
        <h1>{search}</h1>
        </Typography>
        <Typography variant="h5" component="div">
        <h5>{city.temp}℃</h5>
        </Typography>
        <Typography sx={{ mb: 1.0 }} color="text.secondary">
        <h6>min: {city.temp_min}</h6>
        <h6>max: {city.temp_max}</h6>
        </Typography>

        <Typography sx={{ mb: 1.0 }} >
       
        <h6>pressure :{city.pressure}</h6>
        <h6>Humidity :{city.humidity}</h6>
        </Typography>
        <Typography variant="body2">
         
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </div>
    </Card>

    <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.0471288025036!2d75.32899203809473!3d19.87426016039055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb986e29bdf813%3A0xfe9f37ce9c858a80!2sKranti%20Chowk%2C%20Aurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1676878940642!5m2!1sen!2sin"
            width="1300" height="450"  allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>

  </>
}
        // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default Home