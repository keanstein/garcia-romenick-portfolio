import { useEffect, useState } from "react"
import "./preloader.css"
import {preLoaderAnim} from "../animations"
import { Navigate } from "react-router-dom";

export default function PreLoaderPage(){

	let [loader, setLoader] = useState(false);

	useEffect(() => {
		preLoaderAnim();
	}, [])

	return(

		<div className="preloader">
			<div className="texts-container">
				<span className="display-4 fw-bold text-warning">THINK, </span>
				<span className="display-4 fw-bold text-warning">PLAN, </span>
				<span className="display-4 fw-bold text-warning">DEVELOP</span>
			</div>
		</div>
		);
}