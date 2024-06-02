import OrderSidebar from '@/components/orden/OrderSidebar';
import OrderSumary from '@/components/orden/OrderSumary';

export default function RootLayout({ children }) {
	return (
		<>
			<div className="md:flex">
				<OrderSidebar />

				<main className="p-5 md:flex-1 md:h-screen md:overflow-y-scroll">
					{children}
				</main>

				<OrderSumary />
			</div>
		</>
	);
}
