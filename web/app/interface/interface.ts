export interface CardProps {
  id: number;
  nome: string;
  descricao: string;
  materia: string;
  acao?: React.ReactNode;
}
