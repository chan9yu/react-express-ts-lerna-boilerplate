import { App } from './App';

function bootstrap() {
	const server = App.getInstance();
	server.listen();
}

bootstrap();
