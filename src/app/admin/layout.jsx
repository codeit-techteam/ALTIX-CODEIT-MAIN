export const metadata = {
    title: "Admin Dashboard | Altix Codeit",
    robots: {
        index: false,
        follow: false,
    },
};

export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-black">
            {children}
        </div>
    );
}
