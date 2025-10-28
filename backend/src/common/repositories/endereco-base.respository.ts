;
export abstract class EnderecoBaseRepository { 
  abstract cep: string;
  abstract logradouro: string;
  abstract numero?: string;
  abstract complemento?: string;
  abstract bairro: string;
  abstract cidade: string;
  abstract estado: string;
}