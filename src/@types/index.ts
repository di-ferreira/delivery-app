export interface iTableData {
  columTitles: string[];
  resultData: iPedido[];
  actionColumn?: boolean;
  addAction: (p: iPedido) => void;
  editAction: (p: iPedido) => void;
  deleteAction: (p: iPedido) => void;
}

export interface iNavButtons {
  text: string;
  active: boolean;
  link: string;
}

export interface iPedido {
  codigo: string;
  data: string;
  nome: string;
  status: string;
  obs: string;
}
