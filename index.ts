type ClassRef<T> = new (...args: any[]) => T;

export function getMockInstance<T>(targetClass: ClassRef<T>): jest.Mocked<T> {
  let mockInstance = {} as jest.Mocked<T>;

  Object.getOwnPropertyNames(targetClass.prototype).forEach(
    (methodName: string) => {
      mockInstance = { ...mockInstance, [methodName]: jest.fn() };
    }
  );

  return mockInstance;
}
