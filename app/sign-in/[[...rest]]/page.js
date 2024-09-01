import { SignIn } from '@clerk/nextjs';
import './auth.css'; // Assuming you created a custom CSS file

export default function SignInPage() {
    return (
        <div className="auth-container">
            <SignIn
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
                path="/sign-in"
                routing="path"
                signUpUrl="/sign-up"
            />
        </div>
    );
}