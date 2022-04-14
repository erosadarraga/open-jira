
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: "Pendiente : Soy una description",
            status: "pending",
            createdAt: Date.now(),
        },
        {
            description: "En-Proceso Soy una description duplicada",
            status: "in-progress",
            createdAt: Date.now() - 1000000,
        },
        {
            description: "Terminadas: Soy una description triplicada",
            status: "finished",
            createdAt: Date.now() + 1000000,
        }
    ]
}
