import { AxiosResponse } from 'axios';

export type ViaCEPAddressAllthings = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export type ApplicationError = {
  name: string;
  message: string;
};

export type APIError = {
  erro: boolean;
};

export interface APIResponse extends AxiosResponse {
  data: ViaCEPAddressAllthings & APIError;
}

export type ViaCEPAddress = {
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
};


export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};
