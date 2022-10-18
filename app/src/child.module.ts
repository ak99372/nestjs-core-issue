import { Controller, Get, Module } from '@nestjs/common';

@Controller()
export class ChildController {
	@Get()
	getHello(): string {
		return 'this.appService.getHello()';
	}
}

@Module({
	imports: [],
	controllers: [ChildController],
	providers: [],
})
export class ChildModule { }
