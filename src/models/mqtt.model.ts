export interface ConnectionConfig {
  clientId: string;
  protocol: string;
  hostname: string;
  protocolVersion: number;
  port: number;
  path: string;
  clean: boolean;
  resubscribe: boolean;
  keepalive: number;
  reconnectPeriod: number;
  username: string;
  password: string;
}

export interface Connection {
  hostname: string;
  username: string;
  password: string;
}

export interface Subscriptions {
  topic: string;
  subscriptionList: string[];
}

export interface Messages {
  topic: string;
  service: string;
  message: string;
  messageList: string[];
}
