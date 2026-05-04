import { redirect } from "next/navigation";
import { asConfig } from "@/app/config/as.config";

export default function EstruturaRedirect() {
    const firstUnitId = asConfig.unidades[0].id;
    redirect(`/adestramento-salomao/estrutura/${firstUnitId}`);
}
