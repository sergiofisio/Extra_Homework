export interface CardProps {
  id: number;
  nome: string;
  descricao: string;
  materia: string;
  acao?: React.ReactNode;
}

export interface InputProps {
  password?: boolean;
  id: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  acao: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
