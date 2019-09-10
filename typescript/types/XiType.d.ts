interface Valgreen {
  type: "green";
  value: string;
  green_value: string;
}

interface ValYellow {
  type: "yellow";
  value: string;
  yellow_value: string;
}

export type Val = Valgreen | ValYellow;