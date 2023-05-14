function Word(props){

    var {text, deadline, scrollValue} = props

    return(
        <>
        <p className={`${deadline>=scrollValue? "text-zinc-800" : "text-white"} font-mono text-4xl transition-all font-bold`}>{text}</p>
        </>
    )
}

export default Word