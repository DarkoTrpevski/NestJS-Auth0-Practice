import { Injectable, NestMiddleware } from '@nestjs/common';
import { expressJwtSecret } from 'jwks-rsa';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import * as expressJwt from 'express-jwt';
dotenv.config();

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    expressJwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
        }),
        issuer: `https://${process.env.AUTH0_DOMAIN}/`,
        algorithms: ['sha1', 'RS256', 'HS256'],
      })(req, res, (err) => {
        if (err) {
          const status = err.status || 500;
          const message = err.message || 'Sorry we were unable to process your request.';
          return res.status(status).send({
            message,
          });
        }
        next();
      });
  }
}