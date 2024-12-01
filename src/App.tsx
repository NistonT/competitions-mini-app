const tg = window.Telegram.WebApp;

function App() {
	return <>{tg.initDataUnsafe.user?.username}</>;
}

export default App;
