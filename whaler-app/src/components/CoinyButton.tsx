import Button from '@mui/material/Button';
import '@fontsource/coiny';

interface CoinyProps {
    buttonText?: string
    onClick: React.MouseEventHandler
}

const CoinyButton = (props: CoinyProps) => {
    return (
        <>
            <Button variant="contained"
                sx={{
                    backgroundColor: "white", color: "black", position: "absolute", zIndex: 10,
                    fontFamily: "Coiny", height: "80%", width: "100%", fontSize: "100%", paddingTop: "13px"
                }}>
                {props.buttonText}
            </Button>
        </>
    )
}

export default CoinyButton;