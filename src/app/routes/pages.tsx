import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout, GameLayout } from "@/app//layouts";
import { ShulteTablePage } from "@/pages/shulte-table";
import { MathPage } from "@/pages/math";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <h1>Hello World</h1>
			},
			{
				path: 'games',
				element: <GameLayout />,
				children: [
					{
						path: 'shulte',
						element: <ShulteTablePage />
					},
					{
						path: 'math',
						element: <MathPage />
					}
				]
			}
		]
	}
])

export const AppRoutes = () => <RouterProvider router={router} />