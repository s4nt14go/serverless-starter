import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ResponseBuilder } from './ResponseBuilder';

class Handler {
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

const handler = new Handler();
export const hello = handler.hello.bind(handler);
