import { AuthProvider } from '@/contexts/AuthContext';

export const metadata = {
  title: 'Reviewer Portal - UBJSTI',
  description: 'University of Benin Journal of Science, technology and Innovation Reviewer Portal',
};

export default function ReviewerLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider userType="reviewer">
      {children}
    </AuthProvider>
  );
}