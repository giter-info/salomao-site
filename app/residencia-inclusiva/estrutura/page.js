import { redirect } from "next/navigation";
import { riConfig } from "@/app/config/ri.config";

export default function EstruturaRedirect() {
    const firstUnitId = riConfig.unidades[0].id;
    redirect(`/residencia-inclusiva/estrutura/${firstUnitId}`);
}
