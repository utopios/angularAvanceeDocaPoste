import { Controller, Get, Param } from '@nestjs/common';

@Controller('product')
export class ProductController {
    @Get()
    GetAllProducts() {
        return [
            {id : 1, title : 'product 1'},
            {id : 2, title : 'product 2'},
        ]
    }

    @Get(':id')
    GetProduct(@Param() params) {
        return {id : params.id, title : 'product '+ params.id}
    }
}
