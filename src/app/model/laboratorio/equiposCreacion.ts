import { TipoTarea } from "../tipoTarea";
import { YtblSgrAlmacenes } from "../login/ytblSgrAlmacenes";
import { EquiposxEmpresa } from "./equiposxEmpresa ";
import { Serie } from "./serie";

export interface EquiposCreacion {
    id: number;
    tipoTarea: TipoTarea;
    ytblSgrAlmacene: YtblSgrAlmacenes;
    equiposxEmpresa: EquiposxEmpresa;
    series: Serie[];
}