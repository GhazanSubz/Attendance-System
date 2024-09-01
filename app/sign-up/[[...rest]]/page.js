import { SignUp } from '@clerk/nextjs';
import './auth.css'; // Assuming you created a custom CSS file

export default function SignUpPage() {
    return (
        <div className="auth-container">
            <SignUp
                appearance={{
                    elements: {
                        card: 'bg-white p-4 shadow-lg rounded-lg',
                        headerTitle: 'text-2xl font-bold text-center',
                        formFieldInput: 'border rounded p-2 mt-2',
                        primaryButton: 'bg-blue-500 text-white py-2 px-4 rounded',
                    },
                    layout: {
                        socialButtonsPlacement: 'bottom',
                    },
                }}
                path="/sign-up"
                routing="path"
                signInUrl="/sign-in"
            />
        </div>
    );
}
