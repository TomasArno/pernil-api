import { Router } from 'express';
import handleWrongMethod from '../../middlewares/wrongMethodHandler.mid';
import { getAll as getAllProducts } from '../../controllers/product.controller';
import { getAll as getAllMovements } from '../../controllers/movement.controller';
import { getAll as getAllClients } from '../../controllers/client.controller';
import { getAll as getAllCategories } from '../../controllers/category.controller';

const router = Router();

router.get('/products', getAllProducts);

router.get('/clients', getAllClients);

router.get('/movements', getAllMovements);

router.get('/categories', getAllCategories);

router.all('/products|clients|movements|categories/', handleWrongMethod);

export default router;
