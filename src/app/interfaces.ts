export interface Card {
  id: number;
  title: string;
  typeId: number;
  typeName?: string;
  portId: number;
  portName?: string;
  weight: number;
  year: number;
  mission: any;
}

// Interface for Port items
export interface Port {
  id: number;
  title: string;
  // checked?: boolean;
}

// Interface for Type items
export interface Type {
  id: number;
  title: string;
  // checked?: boolean;
}
