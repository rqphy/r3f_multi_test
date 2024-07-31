/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/models/Alien.glb -o src/components/Alien.jsx -r public 
*/

import React, { useEffect, useState } from "react"
import { useGraph } from "@react-three/fiber"
import { useGLTF, useAnimations } from "@react-three/drei"
import { SkeletonUtils } from "three-stdlib"

const BASE_ANIMATION = "AlienArmature|Alien_"
const ANIMATION_FADE_DURATION = 0.3

export function Alien(props) {
	const group = React.useRef()
	const { scene, materials, animations } = useGLTF("/models/Alien.glb")
	const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
	const { nodes } = useGraph(clone)
	const { actions } = useAnimations(animations, group)

	console.log(actions)

	const [animation, setAnimation] = useState("Idle")

	useEffect(() => {
		actions[BASE_ANIMATION + animation]
			.reset()
			.fadeIn(ANIMATION_FADE_DURATION)
			.play()
		return () =>
			actions[BASE_ANIMATION + animation].fadeOut(ANIMATION_FADE_DURATION)
	}, [animation])

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Root_Scene">
				<group name="RootNode">
					<group
						name="AlienArmature"
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					>
						<primitive object={nodes.Bone} />
					</group>
					<group
						name="BaseAlien"
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					>
						<skinnedMesh
							name="BaseAlien_1"
							geometry={nodes.BaseAlien_1.geometry}
							material={materials.Stripe}
							skeleton={nodes.BaseAlien_1.skeleton}
						>
							<meshStandardMaterial color={"red"} />
						</skinnedMesh>
						<skinnedMesh
							name="BaseAlien_2"
							geometry={nodes.BaseAlien_2.geometry}
							material={materials.Main}
							skeleton={nodes.BaseAlien_2.skeleton}
						>
							<meshStandardMaterial color={"blue"} />
						</skinnedMesh>
						<skinnedMesh
							name="BaseAlien_3"
							geometry={nodes.BaseAlien_3.geometry}
							material={materials.Nails}
							skeleton={nodes.BaseAlien_3.skeleton}
						/>
						<skinnedMesh
							name="BaseAlien_4"
							geometry={nodes.BaseAlien_4.geometry}
							material={materials.Eyes}
							skeleton={nodes.BaseAlien_4.skeleton}
						/>
						<skinnedMesh
							name="BaseAlien_5"
							geometry={nodes.BaseAlien_5.geometry}
							material={materials.White}
							skeleton={nodes.BaseAlien_5.skeleton}
						/>
					</group>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload("/models/Alien.glb")
