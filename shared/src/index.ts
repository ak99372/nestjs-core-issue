import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";


export async function customBootstrap(module) {
	const app = await NestFactory.create(module);
	await app.listen(3000).then(() => {
		Logger.log('app started');
	});

}