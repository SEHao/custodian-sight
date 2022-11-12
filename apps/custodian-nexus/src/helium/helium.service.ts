import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HeliumService {
  private host = 'https://status.sensecapmx.cloud';
  private sn = process.env.SN;
  private apiKey = process.env.API_KEY;

  constructor(private readonly httpService: HttpService) {}

  async findOne(): Promise<any> {
    const params = { sn: this.sn, api_key: this.apiKey };
    const url = `${this.host}/api/openapi/device/view_device`;
    const { data } = await firstValueFrom(this.httpService.get(url, { params }));
    return data;
  }
}
