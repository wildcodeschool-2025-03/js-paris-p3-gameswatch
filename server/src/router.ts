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

import videoGameActions from "./modules/videoGame/videoGameActions";

router.get("/api/videoGames", videoGameActions.browse);
router.post("/api/videoGames", videoGameActions.add);
router.get("/api/videoGames/:id", videoGameActions.read);

/* ************************************************************************* */

export default router;
