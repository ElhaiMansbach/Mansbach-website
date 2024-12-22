import React from "react";
import {clsx} from "/src/utils/functions";
import styles from "../../containers/header/index.module.scss";

const Burger = ({width = 16, height = 16, className, ...remainingProps}) => (
		<svg xmlns="http://www.w3.org/2000/svg" id="Menu" width="16" height="16" viewBox="0 0 16 16" 
			 className={clsx("svg-wrapper", className)} {...remainingProps}>
			<path id="Menu-2" d="M-6160 15v-3h16v3zm0-6V6h16v3zm0-6V0h16v3z" className={styles['cls-1']}
				  data-name="Menu" transform="translate(6160 1)"/>
			<path id="Rectangle_1446" d="M0 0h16v16H0z" className={styles['cls-2']} data-name="Rectangle 1446"/>
		</svg>
	);

export default Burger;