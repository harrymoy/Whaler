import TournamentCard from "../components/TournamentCard";
import CardImage from "../images/EnterTournieCardImage.png";
import CardImage1 from "../images/EnterTournieImage_1.png";
import CardImage2 from "../images/EnterTournieImage_2.png";

const TournamentsPage = () => {
    return (
        <ul style={{ margin: "80px" }}>
            <li style={{ float: "left" }}>
                <TournamentCard entryPrice={20} image={CardImage} tournamentLength={"7 Days"} />
            </li>
            <li style={{ float: "left" }}>
                <TournamentCard entryPrice={50} image={CardImage1} tournamentLength={"30 Days"} />
            </li>
            <li style={{ float: "left" }}>
                <TournamentCard entryPrice={60} image={CardImage2} tournamentLength={"14 Days"} />
            </li>
            <li style={{ float: "left" }}>
                <TournamentCard entryPrice={365} image={CardImage1} tournamentLength={"365 Days"} />
            </li>
            <li style={{ float: "left" }}>
                <TournamentCard entryPrice={100} image={CardImage} tournamentLength={"120 Days"} />
            </li>
            <li style={{ float: "left" }}>
                <TournamentCard entryPrice={1} image={CardImage2} tournamentLength={"2 Days"} />
            </li>
        </ul>
    )
}

export default TournamentsPage