
function GetRandomValue(props){
    return(
        Math.floor(Math.random(props.input) * 500)
    );
}

function DataBar(props){
    const style = {
        float: "left",
        backgroundColor: "red",
        border: "1px solid black",
        height: "100px",
        width: "25px",
        position: "relative",
        bottom: "0px",
    }

    let value = 0;
    value = GetRandomValue(value);

    console.log(value);
    style.height = value;

    return(
        <div style={style}>
        </div>
    );
}

export default DataBar;