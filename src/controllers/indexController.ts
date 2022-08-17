import { Request } from '@hapi/hapi';

export function Index(req: Request): string {
  console.log('Processing request', req.info.id);
  return 'Hello! Nice to meet you.';
}
