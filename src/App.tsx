import { useEffect } from "react";
// import QRCode from 'react-qr-code'
import useWebSocket from "react-use-websocket";

const tg = window.Telegram.WebApp;

function App() {
	const TOKEN = "ABCD";
	// const initData = tg.initData;

	const { lastJsonMessage, sendJsonMessage } = useWebSocket(
		`wss://competitions.webository.ru/connect_user?token=${TOKEN}`
	);

	sendJsonMessage({
		event: "USERS:GET_ME",
		data: null,
	});

	useEffect(() => {
		if (lastJsonMessage === null) return;

		if (lastJsonMessage.event === "USERS:GET_ME:RESULT") {
			console.log(lastJsonMessage.data);
		} else {
		}
	}, [lastJsonMessage]);

	// let message = lastJsonMessage.data;

	return (
		<>
			{tg.initDataUnsafe.user?.username}
			{lastJsonMessage.event}
		</>
	);
}

export default App;
