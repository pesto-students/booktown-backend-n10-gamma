import cartRoutes from "./cartRoutes";

/**
 *
 * @param server
 *
 * Add new routes here
 */
const routesHandler = (server) => {
  server.use("/api/cart", cartRoutes);
};

export default routesHandler;
