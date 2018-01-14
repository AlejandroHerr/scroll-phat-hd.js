import { Buffer } from 'buffer';
import BufferError from './BufferError';
import errorCodes from './errorCodes';

export default class MatrixBuffer {
  constructor(width = 17, height = 7, value = 0x00) {
    // check positive
    this.buffer = Buffer.alloc(height * width, value);
    this.width = width;
    this.height = height;
  }

  translate(x, y) {
    return ((x - 1) * this.width) + ((y - 1) * this.height);
  }

  set(x, y, value) {
    if (x < 0 || y < 0) {
      throw new BufferError('Position has to be positive', errorCodes.ILLEGAL_POSITION);
    }
    if (x >= this.width || y >= this.height) {
      throw new BufferError('Out of bounds', errorCodes.OUT_OF_BOUNDS);
    }

    this.buffer[this.translate(x, y)] = value;
  }

  resize(width, height) {
    // check positive
    const buffer = Array.from(Array(this.width).keys()).reduce((buf, x) =>
      Array.from(Array(this.width).keys()).reduce((colBuf, y) => {
        const newBuf = colBuf;
        newBuf[((x - 1) * width) + ((y - 1) * height)] = this.buffer[this.translate(x, y)];

        return newBuf;
      }, buf), Buffer.alloc(width * height, 0x00));

    this.buffer = buffer;
    this.width = width;
    this.height = height;
  }

  fill(value = 0x00) {
    this.buffer.fill(value);

    return this;
  }
}

