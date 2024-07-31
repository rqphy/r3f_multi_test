import {
	ContactShadows,
	Environment,
	OrbitControls,
	useCursor,
} from "@react-three/drei"
import { Alien } from "./Alien"
import { useAtom } from "jotai"
import { charactersAtom, socket } from "./SocketManager"
import { useState } from "react"
import * as THREE from "three"

export const Experience = () => {
	const [characters] = useAtom(charactersAtom)
	const [onFloor, setOnFloor] = useState(false)
	useCursor(onFloor)

	return (
		<>
			<Environment preset="sunset" />
			<ambientLight intensity={0.3} />
			<OrbitControls />
			<ContactShadows blur={2} />

			<mesh
				rotation-x={-Math.PI / 2}
				position-y={-0.001}
				onClick={(_event) =>
					socket.emit("move", [_event.point.x, 0, _event.point.z])
				}
				onPointerEnter={() => setOnFloor(true)}
				onPointerLeave={() => setOnFloor(false)}
			>
				<planeGeometry args={[15, 15]} />
				<meshStandardMaterial color="#f0f0f0" />
			</mesh>

			{characters.map((character) => (
				<Alien
					key={character.id}
					position={
						new THREE.Vector3(
							character.position[0],
							character.position[1],
							character.position[2]
						)
					}
					primaryColor={character.primaryColor}
					secondaryColor={character.secondaryColor}
				/>
			))}
		</>
	)
}
