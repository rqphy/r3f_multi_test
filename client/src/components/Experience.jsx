import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { Alien } from "./Alien"

export const Experience = () => {
	return (
		<>
			<Environment preset="sunset" />
			<ambientLight intensity={0.3} />
			<OrbitControls />
			<ContactShadows blur={2} />
			<Alien />
			<Alien
				position-x="3"
				primaryColor="#ffff00"
				secondaryColor="#0000ff"
			/>
		</>
	)
}
