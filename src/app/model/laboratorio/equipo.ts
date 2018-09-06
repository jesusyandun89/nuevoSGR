import { Bodega } from './bodega';
import { Empresa } from './empresa';
import { MarcaxEquipos } from './marcaxEquipos';
import { ModeloxMarcas } from './modeloxMarcas';
import { Tipo } from './tipo';
import { Serie } from './serie';
export class Equipo {
    id: number;
    bodega: Bodega;
    empresa: Empresa;
    tipo: Tipo;
    marcaxEquipo: MarcaxEquipos;
    modeloxMarca: ModeloxMarcas;
    series: Serie[];
}
