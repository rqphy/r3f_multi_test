import { Environment, OrbitControls } from "@react-three/drei"
import { Alien } from "./Alien"

export const Experience = () => {
	return (
		<>
			<Environment preset="sunset" />
			<ambientLight intensity={0.3} />
			<OrbitControls />
			<Alien />
		</>
	)
}
