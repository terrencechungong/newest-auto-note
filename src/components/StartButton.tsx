
interface ButtonProps {
    width: string;
    fSize: string;
  }

const StartButton: React.FC<ButtonProps> = ({width, fSize}) => {
    let button_style = {
        backgroundColor: '#007aff',
        color: 'white',
        padding:'12px 25px 12px 25px',
        borderRadius: '35px',
        fontSize: fSize,

        fontWeight: '600',
        marginTop: '-11px',
         width,
        marginBottom:'auto'
    }
    return <div style={button_style}>Start for free</div>

}

export default StartButton;