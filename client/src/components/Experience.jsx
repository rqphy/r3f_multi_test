import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { Alien } from "./Alien"
import { useAtom } from "jotai"
import { charactersAtom } from "./SocketManager"

export const Experience = () => {
	const [characters] = useAtom(charactersAtom)

	return (
		<>
			<Environment preset="sunset" />
			<ambientLight intensity={0.3} />
			<OrbitControls />
			<ContactShadows blur={2} />

			{characters.map((character) => (
				<Alien
					key={character.id}
					position={character.position}
					primaryColor={character.primaryColor}
					secondaryColor={character.secondaryColor}
				/>
			))}
		</>
	)
}
