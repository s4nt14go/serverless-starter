import { APIGatewayEvent, Context } from 'aws-lambda';
import * as hello from './hello';

test('hello', async () => {
  const event = { body: 'Test Body' } as APIGatewayEvent;
  const context = {} as Context;

  const response = await hello.handler(event, context);

  expect(response.statusCode).toEqual(200);
  expect(typeof response.body).toBe('string');
});
