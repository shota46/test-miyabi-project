/**
 * Example test file
 *
 * Run tests: npm test
 * Watch mode: npm test -- --watch
 * Coverage: npm test -- --coverage
 */

import { describe, it, expect } from 'vitest';
import { hello, sayHello } from '../src/index.js';

describe('test-miyabi-project', () => {
  it('should return greeting message', () => {
    const result = hello();
    expect(result).toBe('Hello from test-miyabi-project!');
  });

  it('should handle basic math', () => {
    expect(2 + 2).toBe(4);
  });

  it('should validate async operations', async () => {
    const promise = Promise.resolve('success');
    await expect(promise).resolves.toBe('success');
  });
});

describe('sayHello function', () => {
  it('should return greeting with name', () => {
    const result = sayHello('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should work with Japanese names', () => {
    const result = sayHello('太郎');
    expect(result).toBe('Hello, 太郎!');
  });

  it('should handle empty string', () => {
    const result = sayHello('');
    expect(result).toBe('Hello, !');
  });

  it('should handle special characters', () => {
    const result = sayHello('John Doe');
    expect(result).toBe('Hello, John Doe!');
  });
});

describe('Environment', () => {
  it('should have Node.js environment', () => {
    expect(typeof process).toBe('object');
    expect(process.env).toBeDefined();
  });
});
