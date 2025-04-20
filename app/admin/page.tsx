// 'use client';

// import { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
// import { Button } from '../../components/ui/button';
// import { toast } from 'sonner';

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   image?: string;
//   emailVerified?: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export default function AdminPage() {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const [users, setUsers] = useState<User[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (status === 'unauthenticated') {
//       router.push('/auth/signin');
//     }
//   }, [status, router]);

//   useEffect(() => {
//     async function fetchUsers() {
//       try {
//         const response = await fetch('/api/users');
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
        
//         const data = await response.json();
//         setUsers(data.users);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         toast.error('Failed to load users');
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     if (status === 'authenticated') {
//       fetchUsers();
//     }
//   }, [status]);

//   if (status === 'loading' || isLoading) {
//     return (
//       <div className="container mx-auto py-10">
//         <div className="flex justify-center items-center min-h-[50vh]">
//           <p>Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-10">
//       <Card className="max-w-5xl mx-auto">
//         <CardHeader className="flex flex-row items-center justify-between">
//           <div>
//             <CardTitle className="text-2xl">User Management</CardTitle>
//             <CardDescription>View all registered users in the system</CardDescription>
//           </div>
//           <Button onClick={() => router.push('/dashboard')}>Back to Dashboard</Button>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="border-b">
//                   <th className="px-4 py-2 text-left">Name</th>
//                   <th className="px-4 py-2 text-left">Email</th>
//                   <th className="px-4 py-2 text-left">Email Verified</th>
//                   <th className="px-4 py-2 text-left">Created At</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.length > 0 ? (
//                   users.map((user) => (
//                     <tr key={user._id} className="border-b hover:bg-gray-50">
//                       <td className="px-4 py-3 flex items-center gap-2">
//                         {user.image && (
//                           <img
//                             src={user.image}
//                             alt={user.name}
//                             className="w-8 h-8 rounded-full"
//                           />
//                         )}
//                         {user.name}
//                       </td>
//                       <td className="px-4 py-3">{user.email}</td>
//                       <td className="px-4 py-3">
//                         {user.emailVerified ? new Date(user.emailVerified).toLocaleString() : 'Not verified'}
//                       </td>
//                       <td className="px-4 py-3">
//                         {new Date(user.createdAt).toLocaleString()}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={4} className="px-4 py-4 text-center">
//                       No users found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// } 


'use client';

export default function AdminPage() {
  return null;
}
