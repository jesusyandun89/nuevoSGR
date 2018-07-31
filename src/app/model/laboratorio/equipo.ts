import { Bodega } from './bodega';
import { Empresa } from './empresa';
import { Marca } from './marca';
import { Modelo } from './modelo';
import { Tipo } from './tipo';
import { Serie } from './serie';
export class Equipo {
    id: number;
    bodega: Bodega;
    empresa: Empresa;
    tipo: Tipo;
    marca: Marca;
    modelo: Modelo;
    series: Serie[];
}
