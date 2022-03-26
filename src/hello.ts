import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ResponseBuilder } from './ResponseBuilder';

class Hello {
  private responseBuilder: ResponseBuilder;

  constructor() {
    this.responseBuilder = new ResponseBuilder();
  }

  async hello(
    event: APIGatewayEvent,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _context: Context
  ): Promise<APIGatewayProxyResult> {
    return this.responseBuilder.getResponse('Hello world', event);
  }
}

const hello = new Hello();
export const handler = hello.hello.bind(hello);
