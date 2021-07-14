const Button = ({
    text="Pess here",
    type='primary',
    onPress=()=>{},
    disabled,
    }
)=>(
    <button 
    disabled={disabled}
   
    className={`btn btn-${type}`}
    onClick={onPress}
>{text}
</button>

)



export default Button;