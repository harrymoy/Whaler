import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import LinearWithValueLabel from './ProgressBar';
import '@fontsource/coiny';


interface TournamentCardsProps {
    image: string
    tournamentLength: string
    entryPrice: number
}

const TournamentCard = (props: TournamentCardsProps) => {

    return (
        <Card sx={{
            maxWidth: 600, height: "500px", width: "500px", borderRadius: "20px", position: "relative", margin: "20px", float: "left",
            boxShadow: "7px 9px 3px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
        }}>
            <Button variant="contained"
                sx={{
                    backgroundColor: "white", color: "black", position: "absolute", zIndex: 10,
                    fontFamily: "Coiny", top: "30px", left: "30px", height: "50px", width: "150px",
                    fontSize: "40px", paddingTop: "13px"
                }}
            >
                Play
            </Button>
            <CardMedia
                sx={{ height: "75%", width: "100%", position: "absolute", zIndex: 8 }}
                component="img"
                height="140"
                image={props.image}
                alt="green iguana"
            />
            <CardContent sx={{ background: "#0066FF", color: "white", marginTop: "70%", height: "25%", position: "inherit", zIndex: 9 }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: "white", fontFamily: "Coiny", textAlign: "center" }}>
                    Entry Price: {props.entryPrice} DAI
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ color: "white", fontFamily: "Coiny", textAlign: "center" }}>
                    Tournament Length: {props.tournamentLength}
                </Typography>
                <LinearWithValueLabel />
            </CardContent>
        </Card>
    )
}

export default TournamentCard