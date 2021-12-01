export const PUBLIC = 'public';
export const PRIVATE = 'private';
export const isPublic = [PUBLIC];
export const isSignIn = [PRIVATE];

export const HTTP_STATUS_CODE = {
    OK: {
        code: 200,
        message: 'OK',
    },
    CREATED: {
        code: 201,
        message: 'CREATED',
    },
    NO_CONTENT: {
        code: 204,
        message: 'NO CONTENT',
    },
    BAD_REQUEST: {
        code: 400,
        message: 'BAD REQUEST',
    },
    UNAUTHORIZED: {
        code: 401,
        message: 'UNAUTHORIZED',
    },
    FORBIDDEN: {
        code: 403,
        message: 'FORBIDDEN',
    },
    NOT_FOUND: {
        code: 404,
        message: 'NOT FOUND',
    },
    METHOD_NOT_ALLOWED: {
        code: 405,
        message: 'METHOD NOT ALLOWED',
    },
    CONFLICT: {
        code: 409,
        message: 'CONFLICT',
    },
    UNPROCESSABLE_ENTITY: {
        code: 422,
        message: 'UNPROCESSABLE ENTITY',
    },
    INTERNAL_SERVER_ERROR: {
        code: 500,
        message: 'INTERNAL SERVER ERROR',
    },
    SERVICE_UNAVAILABLE: {
        code: 503,
        message: 'SERVICE UNAVAILABLE',
    },
    GATEWAY_TIMEOUT: {
        code: 504,
        message: 'GATEWAY TIMEOUT',
    },
    BAD_GATEWAY: {
        code: 502,
        message: 'BAD GATEWAY',
    },
    SERVICE_UNAVAILABLE: {
        code: 503,
        message: 'SERVICE UNAVAILABLE',
    },
    GATEWAY_TIMEOUT: {
        code: 504,
        message: 'GATEWAY TIMEOUT',
    },
};
