import userEndpoint from "./user.endpoint";
import reservationEndpoint from "./reservation.endpoint";
import roomEndpoint from "./room.endpoint";

const routes = function (app) {
    userEndpoint(app);
    reservationEndpoint(app);
    roomEndpoint(app);
};

export default routes;