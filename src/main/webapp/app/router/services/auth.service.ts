import axios from 'axios';

export interface LoginCredentials {
  username: string;
  password: string;
}

export class AuthService {
  private static instance: AuthService;
  private baseUrl = '/api';

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(credentials: LoginCredentials): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}/authenticate`, credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async logout(): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/logout`);
    } catch (error) {
      throw error;
    }
  }

  public async getAccount(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/account`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const authService = AuthService.getInstance(); 