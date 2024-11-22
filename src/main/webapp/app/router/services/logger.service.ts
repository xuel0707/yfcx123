export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR'
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  module: string;
  details?: any;
}

export class LoggerService {
  private static instance: LoggerService;
  private readonly maxLogSize: number = 1000; // 最大日志条数
  private logs: LogEntry[] = [];
  private isProduction: boolean = process.env.NODE_ENV === 'production';

  private constructor() {}

  public static getInstance(): LoggerService {
    if (!LoggerService.instance) {
      LoggerService.instance = new LoggerService();
    }
    return LoggerService.instance;
  }

  // 记录调试日志
  public debug(message: string, module: string, details?: any): void {
    if (!this.isProduction) {
      this.log(LogLevel.DEBUG, message, module, details);
    }
  }

  // 记录信息日志
  public info(message: string, module: string, details?: any): void {
    this.log(LogLevel.INFO, message, module, details);
  }

  // 记录警告日志
  public warn(message: string, module: string, details?: any): void {
    this.log(LogLevel.WARN, message, module, details);
  }

  // 记录错误日志
  public error(message: string, module: string, details?: any): void {
    this.log(LogLevel.ERROR, message, module, details);
    this.sendErrorToServer(message, module, details);
  }

  // 记录日志
  private log(level: LogLevel, message: string, module: string, details?: any): void {
    const logEntry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      module,
      details
    };

    this.logs.push(logEntry);
    this.trimLogs();
    this.consoleOutput(logEntry);
  }

  // 控制台输出
  private consoleOutput(log: LogEntry): void {
    const formattedMessage = `[${log.timestamp}] [${log.level}] [${log.module}] ${log.message}`;
    
    switch (log.level) {
      case LogLevel.DEBUG:
        console.debug(formattedMessage, log.details || '');
        break;
      case LogLevel.INFO:
        console.info(formattedMessage, log.details || '');
        break;
      case LogLevel.WARN:
        console.warn(formattedMessage, log.details || '');
        break;
      case LogLevel.ERROR:
        console.error(formattedMessage, log.details || '');
        break;
    }
  }

  // 限制日志数量
  private trimLogs(): void {
    if (this.logs.length > this.maxLogSize) {
      this.logs = this.logs.slice(-this.maxLogSize);
    }
  }

  // 获取所有日志
  public getLogs(): LogEntry[] {
    return [...this.logs];
  }

  // 获取特定级别的日志
  public getLogsByLevel(level: LogLevel): LogEntry[] {
    return this.logs.filter(log => log.level === level);
  }

  // 清除日志
  public clearLogs(): void {
    this.logs = [];
  }

  // 将错误日志发送到服务器
  private async sendErrorToServer(message: string, module: string, details?: any): Promise<void> {
    if (this.isProduction) {
      try {
        await fetch('/api/logs/error', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message,
            module,
            details,
            timestamp: new Date().toISOString()
          })
        });
      } catch (error) {
        console.error('Failed to send error log to server:', error);
      }
    }
  }

  // 导出日志
  public exportLogs(format: 'json' | 'csv' = 'json'): string {
    if (format === 'csv') {
      return this.exportLogsAsCsv();
    }
    return JSON.stringify(this.logs, null, 2);
  }

  // 导出为CSV格式
  private exportLogsAsCsv(): string {
    const headers = ['Timestamp', 'Level', 'Module', 'Message', 'Details'];
    const rows = this.logs.map(log => [
      log.timestamp,
      log.level,
      log.module,
      log.message,
      JSON.stringify(log.details || '')
    ]);
    
    return [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');
  }
}

export const loggerService = LoggerService.getInstance(); 