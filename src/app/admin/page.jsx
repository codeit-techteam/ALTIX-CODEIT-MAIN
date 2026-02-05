import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminDashboardClient from './AdminDashboardClient';

export default async function AdminPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token');

    // Simple auth check
    if (!token || token.value !== 'authenticated') {
        redirect('/admin/login');
    }

    return <AdminDashboardClient />;
}
