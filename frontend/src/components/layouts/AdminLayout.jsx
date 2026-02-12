import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";


const DashboardIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 12l9-9 9 9v9a2 2 0 01-2 2h-4a2 2 0 01-2-2V12H9v7a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
    </svg>
);

const ProductsIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
            d="M18 8h1a3 3 0 010 6h-1m-2 4H6a4 4 0 01-4-4V6h18v8a4 4 0 01-4 4z"
        />
    </svg>
);

const OrdersIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 7h18M3 12h18M3 17h18"
        />
    </svg>
);


const UsersIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
            d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 110-8 4 4 0 010 8z"
        />
    </svg>
);

const MachinesIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
            d="M9 17h6m-7 4h8a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2zM9 7h6m-7 4h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v4a2 2 0 002 2z"
        />
    </svg>
);


const LogoutIcon = (
    <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
        />
    </svg>
);


export default function AdminLayout() {
    const { pathname } = useLocation();

    const isActive = (to) => pathname === to || pathname.startsWith(to + "/");//pathname === "/admin/machines"

    const Item = ({ label, icon, to }) => (
        <Link
            to={to}
            className={[
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left",
                isActive(to)
                    ? "bg-[#3B170D] text-white"
                    : "text-[#3B170D]/80 hover:bg-[#3B170D]/10",
            ].join(" ")}
        >
            <span className="text-lg">{icon}</span>
            <span className="font-semibold">{label}</span>
        </Link>
    );

    return (
        <div className="min-h-screen bg-[#F6EEE7] text-[#3B170D] flex">
            <aside className="w-[240px] bg-white border-r border-[#EADFD7] p-5 flex flex-col gap-3">
                <div className="w-24 h-20">
                    <img
                        src="/assets/logo2.png"
                        alt="logo"
                        className="w-full h-full object-contain"
                    />
                </div>

                <nav className="flex flex-col gap-2">
                    <Item label="Dashboard" icon={DashboardIcon} to="/admin/dashboard" />
                    <Item label="Coffees" icon={ProductsIcon} to="/admin/coffees" />
                    <Item label="Orders" icon={OrdersIcon} to="/admin/orders" />
                    <Item label="Users" icon={UsersIcon} to="/admin/users" />
                    <Item label="Machines" icon={MachinesIcon} to="/admin/machines" />
                </nav>

                <button
                    className="mt-auto flex items-center gap-3 px-4 py-2.5 "
                    type="button"
                >

                    <Item label="Log Out" icon={LogoutIcon} />
                </button>
            </aside>

            <main className="flex-1">
                {/* Topbar */}
                <div className=" py-6 px-10 h-25 border-b bg-white ">
                    <header className="flex items-center justify-between gap-4">
                        <div className="relative w-full max-w-[260px]">
                            <div className="text-2xl font-bold">Hello  </div>

                        </div>


                        <div className="flex items-center gap-7 font-instrument-serif">

                            <Link
                                to="/profile"
                                className="w-10 h-10 rounded-full border border-[#E6D8CF] flex items-center justify-center hover:bg-[#3B170D]/20 transition"
                                title="Profile"
                            >
                                <svg
                                    className="w-5 h-5 text-[#3B170D]"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 12c2.7 0 4.5-2.1 4.5-4.5S14.7 3 12 3 7.5 5.1 7.5 7.5 9.3 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5C21 15.5 15 14 12 14z" />
                                </svg>
                            </Link>
                        </div>
                    </header>
                </div>

                <section className="mt-5"><Outlet /></section>
            </main>
        </div>
    );
}
