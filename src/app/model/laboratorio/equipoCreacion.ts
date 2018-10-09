import { TipoTarea } from "../tipoTarea";
import { YtblSgrAlmacenes } from "../login/ytblSgrAlmacenes";
import { EquiposxEmpresa } from "./equiposxEmpresa ";
import { Serie } from "./serie";

export interface EquipoCreacion {
    id: number;
    tipoTarea: TipoTarea;
    ytblSgrAlmacen: YtblSgrAlmacenes;
    equiposxEmpresa: EquiposxEmpresa;
    series: Serie[];
}