import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({info}) {
  const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL ="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="InfoBox">
        <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80
             ? 
             RAIN_URL 
             : info.temp > 15
              ? HOT_URL
               :COLD_URL
              }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{
               info.humidity > 80
             ? 
             <ThunderstormIcon/>
             : info.temp > 15
              ? <SunnyIcon/>
               :<AcUnitIcon/>
              }
            
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
            Temperature = {info.temp}&deg;C<br/>
            Humidity = {info.humidity}<br/>
            Min Temp = {info.tempMin}&deg;C<br/>
            Max Temp = {info.tempMax}&deg;C<br/>
            The weather can be described as {info.weather}, feels like {info.feelslike}&deg;C
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}
