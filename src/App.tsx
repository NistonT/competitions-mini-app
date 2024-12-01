import { useEffect } from "react";
// import QRCode from 'react-qr-code'
import useWebSocket from "react-use-websocket";

const tg = window.Telegram.WebApp;
const username = tg.initDataUnsafe.user?.username || "USERNAME_TG";

function App() {
	const TOKEN = import.meta.env.VITE_TOKEN;
	const initData = tg.initData;

	const { lastJsonMessage, sendJsonMessage } = useWebSocket(
		`wss://competitions.webository.ru/connect_user?token=${encodeURIComponent(
			initData
		)}`
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

	return <>{username}</>;
}

export default App;
