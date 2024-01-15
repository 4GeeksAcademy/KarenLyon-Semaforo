
import React, { useState } from 'react';


//create your first component
const Semaforo = () => {

	const [color, setColor] = useState("red");
return(
<div className="TrafficLight">

	<div onClick={() =>setColor("red")} 
		className={"circle red" + ((color === "red") ? " glow " : "")}></div>
	<div onClick={() => setColor("yellow")} 
	className={"circle yellow" + ((color === "yellow") ? " glow" : "")}></div>
	<div onClick={() => setColor("green")}
	 className={"circle green" + ((color === "green") ? " glow" : "")}></div>
</div>


	);
};

export default Semaforo;
