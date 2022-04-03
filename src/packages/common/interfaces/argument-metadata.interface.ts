export interface ArgumentMetadata {
  /**
   * Underlying base type (e.g., `String`) of the parameter, based on the type
   * definition in the event handler.
   */
  readonly metatype?: Class<any> | undefined;
  /**
   * String passed as an argument to the decorator.
   * Example: `@Body('userId')` would yield `userId`
   */
  readonly data?: string | undefined;
}