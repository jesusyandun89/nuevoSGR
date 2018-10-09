import { Bodega } from './bodega';
import { YtblSgrEmpresa } from '../login/ytblSgrEmpresa';
import { MarcaxEquipos } from './marcaxEquipos';
import { ModeloxMarcas } from './modeloxMarcas';
import { Tipo } from './tipo';
import { Serie } from './serie';
export class Equipo {
    id: number;
    bodega: Bodega;
    ytblSgrEmpresa: YtblSgrEmpresa;
    tipo: Tipo;
    marcaxEquipo: MarcaxEquipos;
    modeloxMarca: ModeloxMarcas;
    series: Serie[];
}
