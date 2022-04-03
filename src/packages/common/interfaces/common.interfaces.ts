import { Observable } from "rxjs";
import { ArgumentMetadata } from "./argument-metadata.interface";
import { IContextExecutorHandler } from "./context-handler.interface";
import { IExecutionContext } from "./execution-context.interface";

export interface INinhoGuard { 
  activate(context: IExecutionContext ): boolean | Promise<boolean>;
}

export interface INinhoInterceptor<THandlerData> {
  intercept(context: IExecutionContext, handle: IContextExecutorHandler<THandlerData>): Promise<Observable<THandlerData>>;
}

export interface INinhoExceptionFilter<TError extends Error> {
  catch(context: IExecutionContext, error: TError): Promise<any>;
}

export interface INinhoTransformer<TInput = any, TReturn = any> {
  transform(value: TInput, metadata: ArgumentMetadata): Promise<TReturn>;
}