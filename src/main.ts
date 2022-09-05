import { Repository } from "./layers/repository/repository";
import { Service } from "./layers/service/service";
import { Transport } from "./layers/transport/transport";

import "./types/global";

const repository = new Repository();
const service = new Service(repository);
new Transport(service);
