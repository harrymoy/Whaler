import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardImage from '../images/EnterTournieCardImage.png';
import WhalerText from '../images/WhalerText.png'
import LinearWithValueLabel from '../components/ProgressBar';
import { createTournament } from '../helpers/createTournament';

import '@fontsource/coiny';
import './MainPage.css';
import '@fontsource/roboto';

const MainPage = () => {
    return (
        <>
            <Card sx={{
                maxWidth: 600, float: "right", top: "100px", left: "25%", height: "600px", width: "600px", position: "relative", borderRadius: "20px",
                boxShadow: "7px 9px 3px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
            }}>
                <Button variant="contained"
                    sx={{
                        backgroundColor: "white", color: "black", position: "absolute", zIndex: 10,
                        fontFamily: "Coiny", top: "30px", left: "30px", height: "50px", width: "150px",
                        fontSize: "40px", paddingTop: "13px"
                    }}
                    onClick={createTournament}
                >
                    Play
                </Button>
                <CardMedia
                    sx={{ height: "75%", width: "100%", position: "absolute", zIndex: 8 }}
                    component="img"
                    height="140"
                    image={CardImage}
                    alt="green iguana"
                />
                <CardContent sx={{ background: "#0066FF", color: "white", marginTop: "70%", height: "25%", position: "inherit", zIndex: 9 }}>
                    <Typography gutterBottom variant="h4" component="div" sx={{ color: "white", fontFamily: "Coiny", textAlign: "center" }}>
                        Entry Price: 20 DAI
                    </Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ color: "white", fontFamily: "Coiny", textAlign: "center" }}>
                        Tournament Length: 7 Days
                    </Typography>
                    <LinearWithValueLabel />
                </CardContent>
            </Card>
            <div className="text-container">
                <Typography variant="h1" sx={{ fontFamily: "Roboto", paddingLeft: "100%" }}>
                    Earning.
                </Typography>
                <Typography variant="h1" sx={{ fontFamily: "Roboto", paddingLeft: "45%" }}>
                    Learning.
                </Typography>
                <Typography variant="h1" sx={{ fontFamily: "Roboto", paddingLeft: "0%" }}>
                    Playing.
                </Typography>
            </div>
            <Typography variant="h1" sx={{ position: "absolute", bottom: 0, padding: "20px", margin: "0 0 10% 5%" }}>
                The <img alt="ConnectButton" src={WhalerText} className=""></img> Cup.
            </Typography>
        </>
    );
}

export default MainPage;