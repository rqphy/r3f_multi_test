import { Server } from "socket.io"

const io = new Server({
	cors: {
		origin: "http://localhost:5173",
	},
})

io.listen(3000)

const characters = []

const generateRandomPosition = () => {
	return [Math.random() * 3, 0, Math.random() * 3]
}

const generateRandomHexColor = () => {
	let n = (Math.random() * 0xfffff * 1000000).toString(16)
	return "#" + n.slice(0, 6)
}

io.on("connection", (socket) => {
	console.log("user connected")
	characters.push({
		id: socket.id,
		position: generateRandomPosition(),
		primaryColor: generateRandomHexColor(),
		secondaryColor: generateRandomHexColor(),
	})

	socket.emit("hello")

	io.emit("characters", characters)

	socket.on("disconnect", () => {
		console.log("user disconnected")

		characters.splice(() => {
			characters.findIndex((character) => character.id === socket.id)
		}, 1)

		io.emit("characters", characters)
	})
})
