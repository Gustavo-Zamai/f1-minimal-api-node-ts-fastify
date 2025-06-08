import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
});

const teams = [
  { id: 1, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 2, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 3, name: "Ferrari", base: "Maranello, Italy" },
  { id: 4, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 6, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 7, name: "Williams", base: "Grove, United Kingdom" },
  { id: 8, name: "Stake F1 Team Kick Sauber", base: "Hinwil, Switzerland" },
  { id: 9, name: "Haas", base: "Kannapolis, United States" },
  { id: 10, name: "Visa Cash App RB", base: "Faenza, Italy" }
];

const drivers = [
  { id: 1, name: "Lewis Hamilton", team: "Ferrari", age: 40 },
  { id: 2, name: "Charles Leclerc", team: "Ferrari", age: 27 },
  { id: 3, name: "Max Verstappen", team: "Red Bull Racing", age: 27 },
  { id: 4, name: "Sergio Pérez", team: "Red Bull Racing", age: 35 },
  { id: 5, name: "George Russell", team: "Mercedes", age: 27 },
  { id: 6, name: "Kimi Antonelli", team: "Mercedes", age: 18 }, 
  { id: 7, name: "Lando Norris", team: "McLaren", age: 25 },
  { id: 8, name: "Oscar Piastri", team: "McLaren", age: 24 },
  { id: 9, name: "Esteban Ocon", team: "Alpine", age: 28 },
  { id: 10, name: "Pierre Gasly", team: "Alpine", age: 29 },
  { id: 11, name: "Fernando Alonso", team: "Aston Martin", age: 43 },
  { id: 12, name: "Lance Stroll", team: "Aston Martin", age: 26 },
  { id: 13, name: "Alexander Albon", team: "Williams", age: 29 },
  { id: 14, name: "Logan Sargeant", team: "Williams", age: 24 },
  { id: 15, name: "Valtteri Bottas", team: "Stake F1 Team Kick Sauber", age: 35 },
  { id: 16, name: "Zhou Guanyu", team: "Stake F1 Team Kick Sauber", age: 26 },
  { id: 17, name: "Kevin Magnussen", team: "Haas", age: 32 },
  { id: 18, name: "Nico Hülkenberg", team: "Haas", age: 37 },
  { id: 19, name: "Yuki Tsunoda", team: "Visa Cash App RB", age: 25 },
  { id: 20, name: "Daniel Ricciardo", team: "Visa Cash App RB", age: 35 }
];


server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);

  return { teams };
});

server.get("/drivers", async (req, res) => {
  res.type("application/json").code(200);

  return { drivers };
});

interface DriverParams {
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async(req, res) => {
    const id = parseInt(req.params.id);

    const driver = drivers.find((driver) => driver.id === id);

    if(!driver){
        res.type("application/json").code(404);
        return { message: "Driver Not Found"}
    } else {
        res.type("application/json").code(200);
        return { driver };
    }
});

interface TeamsParams {
    name: string,
}
server.get<{Params: TeamsParams}>("/teams/:name", async(req, res) => {
    const name = req.params.name;

    const team = teams.find((team) => team.name === name);

    if(!team){
        res.type("application/json").code(404);
        return { message: "Team Not Found"}
    } else {
        res.type("application/json").code(200);
        return { team };
    }
})

interface TeamByIdParams {
    id: string,
}

server.get<{Params: TeamByIdParams}>("/teams/id/:id", async(req, res) => {
    const id = parseInt(req.params.id);

    const team = teams.find((team) => team.id === id);

    if(!team){
        res.type("application/json").code(404);
        return { message: "Team Not Found"}
    } else {
        res.type("application/json").code(200);
        return { team };
    }
})

server.listen({ port: 3333 }, () => {
  console.log("Server init");
});
