import {rtConfig} from "@/app/config/rt.config";
import {riConfig} from "@/app/config/ri.config";

const SITE_URL = "https://redesalomao.com.br";

const STATIC_ROUTES = [
    {path: "/", priority: 1.0, changeFrequency: "weekly"},
    {path: "/residencial-terapeutico", priority: 0.9, changeFrequency: "monthly"},
    {path: "/residencial-terapeutico/unidades", priority: 0.8, changeFrequency: "monthly"},
    {path: "/residencial-terapeutico/estrutura", priority: 0.7, changeFrequency: "monthly"},
    {path: "/residencial-terapeutico/doencas", priority: 0.7, changeFrequency: "monthly"},
    {path: "/residencial-terapeutico/faq", priority: 0.7, changeFrequency: "monthly"},
    {path: "/residencial-terapeutico/materiais", priority: 0.6, changeFrequency: "monthly"},
    {path: "/residencia-inclusiva", priority: 0.9, changeFrequency: "monthly"},
    {path: "/residencia-inclusiva/unidades", priority: 0.8, changeFrequency: "monthly"},
    {path: "/residencia-inclusiva/estrutura", priority: 0.7, changeFrequency: "monthly"},
    {path: "/marketing-salomao", priority: 0.9, changeFrequency: "monthly"},
    {path: "/apresentacao", priority: 0.6, changeFrequency: "monthly"},
    {path: "/apresentacao-ri", priority: 0.6, changeFrequency: "monthly"},
    {path: "/sobre", priority: 0.6, changeFrequency: "monthly"},
    {path: "/contato", priority: 0.8, changeFrequency: "monthly"},
    {path: "/saibamais", priority: 0.5, changeFrequency: "monthly"},
];

export default function sitemap() {
    const lastModified = new Date();

    const unitRoutes = [
        ...rtConfig.unidades.map((u) => `${rtConfig.basePath}/estrutura/${u.id}`),
        ...riConfig.unidades.map((u) => `${riConfig.basePath}/estrutura/${u.id}`),
    ].map((path) => ({path, priority: 0.5, changeFrequency: "monthly"}));

    return [...STATIC_ROUTES, ...unitRoutes].map(({path, priority, changeFrequency}) => ({
        url: `${SITE_URL}${path === "/" ? "" : path}`,
        lastModified,
        changeFrequency,
        priority,
    }));
}
