import { Route, Routes } from 'react-router-dom';
import { RootLayout} from './pages/RootLayout';
import { Home } from './pages/Home';
import {ItemsLayout} from './pages/Items/ItemsLayout';
import { ListItems } from './pages/Items/ListItems';
import { CreateItems } from './pages/Items/CreateItems';
import { ShowItems } from './pages/Items/ShowItems';
import { UpdateItems } from './pages/Items/UptadeItems';

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<RootLayout/>}>
                <Route index element={<Home/>} />
                <Route path="items" element={<ItemsLayout/>}>
                    <Route index element={<ListItems />} /> 
                    <Route path="new" element={<CreateItems />} />
                    <Route path=":id" element={<ShowItems />} />
                    <Route path=":id/update" element={<UpdateItems />} />
                </Route>
            </Route>
            <Route path="*" element={<h1 className='text-white text-5xl text-center'>Not found</h1>} />
        </Routes>
    );
}
