import type { SpanAttributes, SpanTimeInput } from './span';

export interface TimedEvent {
  name: string;
  time: SpanTimeInput;
  attributes?: SpanAttributes;
}
