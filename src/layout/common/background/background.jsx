const Background = (props) => {

    const background = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        height: '100%',
        width: '100%',

        backgroundImage: `url(${props.background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed',
        opacity: 0.5,

        /// Add the blur effect
        filter: 'blur(4px)',
        WebkitFilter:' blur(4px)',
        //transform: 'scale(1.1)',
    };

    return <div style={background}/>
};

export default Background;