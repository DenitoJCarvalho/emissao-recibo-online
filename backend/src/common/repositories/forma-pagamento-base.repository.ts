export abstract class FormaPagamentoBaseRepository {
  abstract formaPagamento: {
    tipoPagamentoId: string;
    dataPagamento: Date;
    pix?: {
      quemRecebeu: string;
      chavePix: string;
      instituicao: string;
    }
    transferenciaBancaria?: { 
      conta: string,
      agencia: string;
      banco: string;
      favorecido: string;
      numeroDocumento: string;
    }
  }
 }