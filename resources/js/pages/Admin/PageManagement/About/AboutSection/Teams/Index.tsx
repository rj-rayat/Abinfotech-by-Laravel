import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Trash2, Plus, UserPlus, ArrowLeft, Edit } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface Member {
    id: number;
    name: string;
    role: string;
    image: string | null;
    experience_year: number;
}

interface Props {
    members: Member[];
}

export default function Index({ members }: Props) {
    const { delete: destroy } = useForm();

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this team member?')) {
            destroy(route('admin.teams.destroy', id));
        }
    };

    return (

        <AppLayout>
            <Head title='Team Management' />
            <div className="w-6xl mx-auto p-6 md:p-10 bg-background text-foreground">
                <div className="flex justify-between items-center mb-8">
                    <div className='flex items-center gap-2'>
                        < div className="p-2 hover:bg-muted rounded-lg border">
                        <ArrowLeft onClick={() => window.history.back()} className="h-4 w-4 cursor-pointer" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Team Management</h1>
                        <p className="text-sm text-muted-foreground mt-1">Manage your professional team members and profiles.</p>
                    </div>
                    </div>
                    <Link href={route('admin.teams.create')} className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition shadow-md shadow-indigo-600/10">
                        <UserPlus className="w-4 h-4" />
                        Add Member
                    </Link>
                </div>

                <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-muted/50 border-b text-sm font-semibold text-muted-foreground">
                                    <th className="p-4 pl-6">Avatar</th>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Role</th>
                                    <th className="p-4">Experience</th>
                                    <th className="p-4 text-right pr-6">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y text-sm">
                                {members.map((member) => (
                                    <tr key={member.id} className="hover:bg-muted/30 transition">
                                        <td className="p-4 pl-6">
                                            <img
                                                src={member.image ? `/storage/${member.image}` : '/images/team-placeholder.jpg'}
                                                alt={member.name}
                                                className="w-12 h-12 rounded-xl object-cover border bg-muted"
                                            />
                                        </td>
                                        <td className="p-4 font-semibold">{member.name}</td>
                                        <td className="p-4 text-muted-foreground">{member.role}</td>
                                        <td className="p-4 font-medium">{member.experience_year} Years</td>
                                        <td className="p-4 text-right pr-6">
                                            <Link href={route('admin.teams.edit', member.id)} >
                                                
                                                <button className="p-2 cursor-pointer text-green-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(member.id)}
                                                className="p-2 cursor-pointer text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition"
                                                title="Delete Member"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {members.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="text-center py-12 text-muted-foreground font-medium">
                                            No team members found. Click "Add Member" to get started!
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>

    );
}