import errorCodes from './errorCodes';

export default class BufferError extends Error {
  constructor(message = 'Buffer Error', code = errorCodes.ERROR, error = null) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = 'BufferError';
    this.code = code;
    this.error = error;
  }
}
