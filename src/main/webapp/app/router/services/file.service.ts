import axios from 'axios';

export interface UploadConfig {
  maxSize: number;  // 最大文件大小（字节）
  allowedTypes: string[];  // 允许的文件类型
  multiple: boolean;  // 是否允许多文件
}

export interface FileInfo {
  id: number;
  name: string;
  size: number;
  type: string;
  url: string;
  uploadTime: string;
  status: string;
}

export class FileService {
  private static instance: FileService;
  private baseUrl = '/api/files';

  private constructor() {}

  public static getInstance(): FileService {
    if (!FileService.instance) {
      FileService.instance = new FileService();
    }
    return FileService.instance;
  }

  // 上传单个文件
  public async uploadFile(file: File, type: string): Promise<FileInfo> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', type);

      const response = await axios.post(`${this.baseUrl}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 批量上传文件
  public async uploadFiles(files: File[], type: string): Promise<FileInfo[]> {
    try {
      const formData = new FormData();
      files.forEach(file => {
        formData.append('files', file);
      });
      formData.append('type', type);

      const response = await axios.post(`${this.baseUrl}/batch-upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 下载文件
  public async downloadFile(fileId: number): Promise<Blob> {
    try {
      const response = await axios.get(`${this.baseUrl}/download/${fileId}`, {
        responseType: 'blob'
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取文件列表
  public async getFileList(type: string): Promise<FileInfo[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/list`, {
        params: { type }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 删除文件
  public async deleteFile(fileId: number): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}/${fileId}`);
    } catch (error) {
      throw error;
    }
  }

  // 获取文件上传配置
  public async getUploadConfig(type: string): Promise<UploadConfig> {
    try {
      const response = await axios.get(`${this.baseUrl}/config/${type}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取文件预览URL
  public async getPreviewUrl(fileId: number): Promise<string> {
    try {
      const response = await axios.get(`${this.baseUrl}/preview/${fileId}`);
      return response.data.url;
    } catch (error) {
      throw error;
    }
  }
}

export const fileService = FileService.getInstance(); 