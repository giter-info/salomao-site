import { redirect } from "next/navigation";
import { rtConfig } from "@/app/config/rt.config";

export default function EstruturaRedirect() {
    // Redireciona para a primeira unidade configurada
    const firstUnitId = rtConfig.unidades[0].id;
    redirect(`/residencial-terapeutico/estrutura/${firstUnitId}`);
}
