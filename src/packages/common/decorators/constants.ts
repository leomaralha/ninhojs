const DecoratorMetadataKey: Record<string, PropertyLabel> = {
  Controller: Symbol('Controller'),
  Module: Symbol('Module'),
  Subscribe: Symbol('Subscribe'),
  UseFilter: Symbol('UseFilter'),
  UseGuard: Symbol('UseGuard'),
  UseInterceptor: Symbol('UseInterceptor'),
  UseParamDecorator: Symbol('UseParamDecorator'),
};

export default DecoratorMetadataKey;
