/**
 * Language: typescript
 * Path: src/packages/packages.d.ts
 */
// eslint-disable-next-line @typescript-eslint/ban-types
declare type TypeOrArray<T> = T | (T | undefined)[];

/**
 * Language: typescript
 * Path: src/packages/packages.d.ts
 */
// eslint-disable-next-line @typescript-eslint/ban-types
declare type Class<T> = { new (...args: any[]): T } | Function;

/**
 * Language: typescript
 * Path: src/packages/packages.d.ts
 */
// eslint-disable-next-line @typescript-eslint/ban-types
declare type ClassOrInterface<T> = Class<T> | Interface<T>;

/**
 * Language: typescript
 * Path: src/packages/packages.d.ts
 */
// eslint-disable-next-line @typescript-eslint/ban-types
declare type ClassOrInterfaceOrUnion<T> = ClassOrInterface<T> | Union<T>;

/**
 * Language: typescript
 * Path: src/packages/packages.d.ts
 */
// eslint-disable-next-line @typescript-eslint/ban-types
declare type ClassOrInterfaceOrLiteralType<T> =
  | ClassOrInterfaceOrUnion<T>
  | LiteralType<T>;

/**
 * Language: typescript
 * Path: src/packages/packages.d.ts
 */
// eslint-disable-next-line @typescript-eslint/ban-types
declare type ClassOrInterfaceOrTypeAlias<T> =
  | ClassOrInterfaceOrLiteralType<T>
  | TypeAlias<T>;

/**
 * Language: typescript
 * Path: src/packages/packages.d.ts
 */
// eslint-disable-next-line @typescript-eslint/ban-types
declare type ClassOrInterfaceOrEnum<T> =
  | ClassOrInterfaceOrTypeAlias<T>
  | Enum<T>;

  /**
   * Language: typescript
   * Path: src/packages/packages.d.ts
   * @description A type that can be used to represent a value of any type.
   */
declare type PropertyLabel = symbol | number | string;

declare type Controller = object;
