import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('contact')
export class ContactController {

    @Get()
    GetContacts() {
        return [{
            id: 1, name: "toto"
        }]
    }

    @Get(":id")
    GetContact(@Param() params) {
        return {
            id: params.id, name: "toto"
        }
    }

    @Post()
    PostContact(@Body() body) {

    }

    @Post(":id")
    PutContact(@Param() params,@Body() body) {
        
    }
}
