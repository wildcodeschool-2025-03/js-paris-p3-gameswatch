import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
/* import itemActions from "./modules/item/exemple";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add); */

import videoGameActions from "./modules/videoGames/videoGameActions";

router.get("/api/videoGames", videoGameActions.test);

/* ************************************************************************* */

export default router;
